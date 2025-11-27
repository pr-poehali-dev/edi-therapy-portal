import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/e4baba3b-cd83-4231-91fc-2fb64bbf1c0e.png" 
              alt="Клиника Мужского Здоровья" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            {[
              { id: "home", label: "Главная" },
              { id: "types", label: "Виды ЭД" },
              { id: "diagnostics", label: "Диагностика" },
              { id: "treatment", label: "Лечение" },
              { id: "reviews", label: "Отзывы" },
              { id: "contacts", label: "Контакты" }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollToSection("contacts")}>
            Записаться на приём
          </Button>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Клиника Мужского Здоровья
                  <span className="block text-primary mt-2">Профессора М.Е. Чалого</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Современное лечение эректильной дисфункции без хирургического вмешательства. 
                  Эффективные инъекционные методики с доказанной результативностью.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={() => scrollToSection("contacts")} className="text-lg">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться на консультацию
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection("treatment")}>
                    Узнать о методах лечения
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="p-6 bg-card/50 backdrop-blur">
                  <CardContent className="space-y-4 p-0">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Shield" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Конфиденциальность</h3>
                        <p className="text-sm text-muted-foreground">100% гарантия анонимности</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Award" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Опыт более 25 лет</h3>
                        <p className="text-sm text-muted-foreground">Профессор М.Е. Чалый</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="TrendingUp" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Эффективность 85%+</h3>
                        <p className="text-sm text-muted-foreground">Современные методики</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="types" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Виды эректильной дисфункции</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Понимание причины проблемы — первый шаг к её успешному решению
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "Brain",
                  title: "Психогенная ЭД",
                  description: "Связана со стрессом, тревогой, депрессией и психологическими факторами. Встречается у 10-20% пациентов."
                },
                {
                  icon: "Activity",
                  title: "Органическая ЭД",
                  description: "Вызвана физическими причинами: сосудистыми проблемами, диабетом, гормональными нарушениями. Самый распространенный тип."
                },
                {
                  icon: "Combine",
                  title: "Смешанная форма",
                  description: "Комбинация психологических и физических причин. Требует комплексного подхода к лечению."
                }
              ].map((type, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={type.icon} className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="diagnostics" className="py-20 bg-secondary/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Диагностика</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексное обследование для точного определения причин и выбора оптимального метода лечения
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "Stethoscope", title: "Консультация уролога-андролога", desc: "Сбор анамнеза и первичный осмотр" },
                { icon: "TestTube", title: "Лабораторная диагностика", desc: "Анализы крови на гормоны и биохимию" },
                { icon: "Scan", title: "УЗИ сосудов", desc: "Допплерография полового члена" },
                { icon: "FileText", title: "Психологическое тестирование", desc: "Выявление психогенных факторов" }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                      <Icon name={item.icon} className="text-accent" size={28} />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="treatment" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Современные методы лечения</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Безоперационные инъекционные методики с высокой эффективностью
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4">
                    <Icon name="Syringe" className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Интракавернозная терапия</h3>
                  <p className="text-sm text-muted-foreground">Эффективность до 90%</p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Инъекции сосудорасширяющих препаратов непосредственно в кавернозные тела полового члена.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">Быстрый эффект через 5-15 минут</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">Продолжительность эрекции 30-60 минут</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">Эффективна даже при тяжелых формах ЭД</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">Обучение самостоятельному применению</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-gradient-to-br from-accent/20 to-primary/10 p-6">
                  <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mb-4">
                    <Icon name="Droplet" className="text-accent-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">PRP-терапия</h3>
                  <p className="text-sm text-muted-foreground">Естественное восстановление</p>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Лечение обогащенной тромбоцитами плазмой собственной крови для регенерации тканей.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">100% безопасно — используется собственная кровь</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">Стимулирует рост новых сосудов</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">Улучшает чувствительность</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">Долгосрочный накопительный эффект</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <Icon name="Info" className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">
                    Выбор метода лечения определяется после полной диагностики. Возможна комбинация различных методик 
                    для достижения максимального эффекта. Все процедуры проводятся в комфортной атмосфере с соблюдением 
                    полной конфиденциальности.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-secondary/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы пациентов</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Конфиденциальность — наш приоритет. Все отзывы публикуются анонимно
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  initials: "А.С.",
                  age: "42 года",
                  text: "После диабета столкнулся с проблемой. Интракавернозная терапия вернула уверенность в себе. Спасибо профессору Чалому за деликатность и профессионализм.",
                  rating: 5
                },
                {
                  initials: "М.В.",
                  age: "38 лет",
                  text: "PRP-терапия превзошла ожидания. Результат появился постепенно, но стабильный. Отличная альтернатива таблеткам. Рекомендую всем, кто ищет долгосрочное решение.",
                  rating: 5
                },
                {
                  initials: "Д.К.",
                  age: "55 лет",
                  text: "Обращался в несколько клиник, но только здесь нашел индивидуальный подход. Комбинированная терапия дала отличный результат. Профессионалы своего дела!",
                  rating: 5
                }
              ].map((review, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-lg">{review.initials}</p>
                        <p className="text-sm text-muted-foreground">{review.age}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Запишитесь на консультацию — первый шаг к решению проблемы
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес клиники</h3>
                      <p className="text-muted-foreground">Москва, ул. Примерная, д. 123</p>
                      <p className="text-sm text-muted-foreground mt-1">м. Примерная, 5 минут пешком</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <a href="tel:+74951234567" className="text-primary hover:underline">+7 (495) 123-45-67</a>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@clinic.ru" className="text-primary hover:underline">info@clinic.ru</a>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение 24 часов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Записаться на приём</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <input 
                        type="text" 
                        placeholder="Как к вам обращаться?" 
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Удобное время</label>
                      <select className="w-full px-4 py-2 rounded-md border border-input bg-background">
                        <option>Утро (9:00 - 12:00)</option>
                        <option>День (12:00 - 16:00)</option>
                        <option>Вечер (16:00 - 21:00)</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-secondary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/e4baba3b-cd83-4231-91fc-2fb64bbf1c0e.png" 
                alt="Клиника" 
                className="h-10 w-auto"
              />
              <p className="text-sm text-muted-foreground">
                © 2024 Клиника Мужского Здоровья профессора М.Е. Чалого
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
