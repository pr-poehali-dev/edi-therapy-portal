import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field


class AppointmentRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    time_slot: str


def handler(event: dict, context) -> dict:
    '''API для отправки заявок на запись к врачу на email администратора'''
    method = event.get('httpMethod', 'POST')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        body = json.loads(event.get('body', '{}'))
        appointment = AppointmentRequest(**body)
    except Exception as e:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Invalid request data: {str(e)}'})
        }

    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    admin_email = os.environ.get('ADMIN_EMAIL')

    if not all([smtp_host, smtp_user, smtp_password, admin_email]):
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Email configuration is missing'})
        }

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на приём — {appointment.name}'
    msg['From'] = smtp_user
    msg['To'] = admin_email

    html = f"""
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Новая заявка на запись к врачу
          </h2>
          <p style="font-size: 14px; color: #666;">
            Получена: {datetime.now().strftime('%d.%m.%Y в %H:%M')}
          </p>
          <table style="width: 100%; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 40%;">Имя пациента:</td>
              <td style="padding: 10px; background: #fafafa;">{appointment.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Телефон:</td>
              <td style="padding: 10px; background: #fafafa;">
                <a href="tel:{appointment.phone}" style="color: #2563eb; text-decoration: none;">
                  {appointment.phone}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Удобное время:</td>
              <td style="padding: 10px; background: #fafafa;">{appointment.time_slot}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; padding: 15px; background: #eff6ff; border-left: 4px solid #2563eb; font-size: 14px;">
            <strong>Действие:</strong> Свяжитесь с пациентом для подтверждения записи.
          </p>
        </div>
      </body>
    </html>
    """

    msg.attach(MIMEText(html, 'html'))

    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)

        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': False,
                'error': f'Failed to send email: {str(e)}'
            })
        }
