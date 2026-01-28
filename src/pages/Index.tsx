import { useState } from "react";
import { motion } from "framer-motion";
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

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
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
              { id: "prices", label: "Цены" },
              { id: "faq", label: "Вопросы" },
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
              <motion.div className="space-y-6" {...fadeInUp}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Эффективное лечение эректильной дисфункции
                </h1>
                <p className="text-xl text-muted-foreground">
                  Современное лечение эректильной дисфункции без хирургического вмешательства. 
                  Эффективные методики с доказанной результативностью.
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
              </motion.div>
              <motion.div className="relative" {...fadeInUp} transition={{ delay: 0.2, duration: 0.6 }}>
                <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/a237247e-eafd-4d28-ad02-d1e2f364317d/bucket/a927ebea-01fc-4506-856d-2a8b95786133.png" 
                    alt="Консультация врача" 
                    className="w-full aspect-[16/6] object-cover object-center"
                  />
                </div>
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
                        <h3 className="font-semibold">Опыт работы более 27 лет</h3>
                        <p className="text-sm text-muted-foreground">Профессора М.Е. Чалого и его коллег</p>
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
              </motion.div>
            </div>
          </div>
        </section>

        <section id="types" className="py-20">
          <div className="container">
            <motion.div className="text-center mb-12" {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Виды эректильной дисфункции</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Понимание причины проблемы — первый шаг к её успешному решению
              </p>
            </motion.div>
            <motion.div className="mb-8 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto" {...fadeInUp}>
              <img 
                src="https://cdn.poehali.dev/projects/a237247e-eafd-4d28-ad02-d1e2f364317d/bucket/6a48e243-29d2-443a-82a3-462d1846289e.png" 
                alt="Консультация врача" 
                className="w-full aspect-[16/6] object-cover object-center"
              />
            </motion.div>
            <motion.div className="grid md:grid-cols-3 gap-6" {...staggerContainer}>
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
                <motion.div key={idx} {...fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 space-y-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={type.icon} className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="diagnostics" className="py-20 bg-secondary/20">
          <div className="container">
            <motion.div className="text-center mb-12" {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Диагностика</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексное обследование для точного определения причин и выбора оптимального метода лечения
              </p>
            </motion.div>
            <motion.div className="mb-8 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto" {...fadeInUp}>
              <img 
                src="https://cdn.poehali.dev/projects/a237247e-eafd-4d28-ad02-d1e2f364317d/bucket/63604a21-3bf8-4a08-bb9e-1d7c51da4172.png" 
                alt="Кабинет диагностики" 
                className="w-full aspect-[16/6] object-cover object-center"
              />
            </motion.div>
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" {...staggerContainer}>
              {[
                { icon: "Stethoscope", title: "Консультация уролога-андролога", desc: "Сбор анамнеза и первичный осмотр" },
                { icon: "TestTube", title: "Лабораторная диагностика", desc: "Анализы крови на гормоны и биохимию" },
                { icon: "Scan", title: "УЗИ сосудов", desc: "Допплерография полового члена" },
                { icon: "FileText", title: "Психологическое тестирование", desc: "Выявление психогенных факторов" }
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                        <Icon name={item.icon} className="text-accent" size={28} />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="treatment" className="py-20">
          <div className="container">
            <motion.div className="text-center mb-12" {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Современные методы лечения</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексный подход: инъекционные методики и физиотерапия
              </p>
            </motion.div>
            
            <div className="mb-8">
              <motion.h3 className="text-2xl font-semibold text-center mb-6" {...fadeInUp}>Инъекционные методики</motion.h3>
              <motion.div className="mb-8 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto" {...fadeInUp}>
                <img 
                  src="https://cdn.poehali.dev/projects/a237247e-eafd-4d28-ad02-d1e2f364317d/bucket/02a12dbd-d0f7-4b6c-a235-ae0be33a6c5f.png" 
                  alt="Инъекционные методики" 
                  className="w-full aspect-[16/6] object-cover object-center"
                />
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
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-center mb-6">Физиотерапевтические методы</h3>
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
                <img 
                  src="https://cdn.poehali.dev/projects/a237247e-eafd-4d28-ad02-d1e2f364317d/bucket/06ea1f63-1109-41f5-b224-cf012d06e0b4.png" 
                  alt="Физиотерапевтическое оборудование" 
                  className="w-full aspect-[16/6] object-cover object-center"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/20 p-6">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4">
                      <Icon name="Radio" className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Ударно-волновая терапия</h3>
                    <p className="text-sm text-muted-foreground">Неинвазивное восстановление</p>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground">
                      Воздействие низкоинтенсивными ударными волнами улучшает кровоснабжение и стимулирует рост новых сосудов.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">Безболезненная процедура</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">Курс 6-12 процедур</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">Улучшение естественной эрекции</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">Эффект до 2 лет</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-br from-accent/20 to-secondary/20 p-6">
                    <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mb-4">
                      <Icon name="Heart" className="text-accent-foreground" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Усиленная наружная контрпульсация</h3>
                    <p className="text-sm text-muted-foreground">Улучшение кровообращения</p>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground">
                      Улучшение кровообращения в органах малого таза с помощью пневматических манжет.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">Комфортная процедура</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">Улучшает работу сосудов</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">Снижает риск сердечно-сосудистых заболеваний</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">Общее оздоровление организма</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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

        <section id="prices" className="py-20 bg-secondary/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены на услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Прозрачное ценообразование без скрытых платежей
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                { service: "Первичная консультация уролога-андролога", price: "3 000" },
                { service: "Повторная консультация", price: "1 500" },
                { service: "Комплексная диагностика ЭД", price: "14 800" },
                { service: "Интракавернозная терапия (1 процедура)", price: "3 500" },
                { service: "PRP-терапия (1 процедура)", price: "20 000" },
                { service: "Ударно-волновая терапия (1 сеанс)", price: "5 000" },
                { service: "УВТ (курс 10 процедур)", price: "45 000" },
                { service: "Усиленная наружная контрпульсация (1 сеанс)", price: "5 000" },
                { service: "Контрпульсация (курс 20 процедур)", price: "90 000" }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 flex justify-between items-center">
                    <span className="font-medium">{item.service}</span>
                    <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Card className="max-w-3xl mx-auto bg-gradient-to-r from-accent/10 to-primary/10">
                <CardContent className="p-6">
                  <Icon name="BadgePercent" className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Программы лечения</h3>
                  <p className="text-muted-foreground">
                    При покупке комплексных программ лечения предоставляются скидки до 10%. 
                    Возможна рассрочка платежа. Узнайте подробности у администратора.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ответы на важные вопросы о диагностике и лечении
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "Как понять, что пора обратиться к врачу?",
                  answer: "Если проблемы с эрекцией возникают регулярно в течение 3 месяцев или более, это повод записаться на консультацию. Ранняя диагностика позволяет выявить причину и начать эффективное лечение."
                },
                {
                  question: "Безопасны ли инъекционные методики?",
                  answer: "Да, интракавернозная терапия и PRP-терапия безопасны при правильном применении. В нашей клинике используются только сертифицированные препараты, а процедуры проводятся опытными специалистами. Перед назначением проводится полная диагностика."
                },
                {
                  question: "Сколько времени занимает лечение?",
                  answer: "Продолжительность зависит от выбранного метода. Интракавернозная терапия дает мгновенный эффект. PRP-терапия и ударно-волновая терапия требуют курсового лечения — результат появляется через 4-6 недель и сохраняется длительное время."
                },
                {
                  question: "Гарантируете ли вы конфиденциальность?",
                  answer: "Абсолютно. Мы строго соблюдаем врачебную тайну. Все данные пациентов защищены, консультации проходят в отдельных кабинетах, возможна запись под псевдонимом. Ваша конфиденциальность — наш приоритет."
                },
                {
                  question: "Можно ли совмещать разные методы лечения?",
                  answer: "Да, комплексный подход часто дает наилучшие результаты. После диагностики врач составит индивидуальную программу, которая может включать несколько методик для достижения максимального эффекта."
                },
                {
                  question: "Что делать, если таблетки не помогают?",
                  answer: "Если пероральные препараты неэффективны, инъекционные методики и физиотерапия — отличная альтернатива. Эти методы работают по другому принципу и помогают даже в сложных случаях, когда таблетки бессильны."
                }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="HelpCircle" className="text-primary" size={20} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{item.question}</h3>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/a237247e-eafd-4d28-ad02-d1e2f364317d/bucket/3883b04c-ad3c-4035-ad2d-c25b86e078cf.png" 
                    alt="Ресепшн клиники" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <Card>
                  <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес клиники</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Россолимо, д. 11А, 13 этаж</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <a href="tel:+74957083800" className="text-primary hover:underline block">+7 (495) 708-38-00</a>
                      <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 20:00</p>
                      <a href="tel:+79670223553" className="text-primary hover:underline block mt-2">+7 (967) 022-35-53</a>
                      <p className="text-sm text-muted-foreground">Дежурный телефон с 20:00 до 00:00</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@androlog.ru" className="text-primary hover:underline">info@androlog.ru</a>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение 24 часов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
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
                        <option>Утро (8:00 - 12:00)</option>
                        <option>День (12:00 - 16:00)</option>
                        <option>Вечер (16:00 - 20:00)</option>
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
              <a href="https://vk.com/clinic_for_man" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.38 14.03h-1.37c-.63 0-.82-.5-1.94-1.63-1-1-1.44-1.14-1.69-1.14-.35 0-.44.09-.44.54v1.48c0 .4-.13.64-1.18.64-1.75 0-3.7-.96-5.07-2.75-2.04-2.6-2.6-4.55-2.6-4.94 0-.25.09-.49.54-.49h1.37c.4 0 .56.18.71.61.75 2.15 2 4.03 2.51 4.03.19 0 .28-.09.28-.59v-2.31c-.06-1.09-.64-1.18-.64-1.57 0-.2.16-.4.42-.4h2.15c.34 0 .46.18.46.58v3.11c0 .34.15.46.25.46.19 0 .37-.12.75-.49 1.15-1.29 1.97-3.29 1.97-3.29.11-.23.29-.45.72-.45h1.37c.46 0 .56.24.46.57-.15.8-1.51 3.07-1.51 3.07-.15.25-.21.36 0 .65.15.21.64.63 1.07 1.13.77.88 1.37 1.62 1.53 2.13.16.51-.09.77-.59.77z"/>
                </svg>
              </a>
              <a href="https://t.me/androlog_kmz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              <a href="https://rutube.ru/channel/74856577/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Video" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;