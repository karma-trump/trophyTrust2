/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Trophy, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Send, 
  Star, 
  ChevronDown, 
  Instagram, 
  MessageCircle,
  Clock,
  Zap,
  UserCheck,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-brand-blue p-1.5 rounded-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-slate-900">TrophyTrust</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Услуги</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Как это работает</a>
            <a href="#portfolio" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Портфолио</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Цены</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">FAQ</a>
            <a 
<<<<<<< HEAD
              href="https://t.me/trophytrust" 
=======
              href="https://t.me/TrophyTrust" 
>>>>>>> 546b205 (first commit)
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
            >
              Связаться в Telegram
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 flex flex-col gap-4"
        >
          <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Услуги</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Как это работает</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Портфолио</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Цены</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">FAQ</a>
          <a 
            href="https://t.me/trophytrust" 
            className="bg-brand-blue text-white px-5 py-3 rounded-xl text-center font-semibold"
          >
            Связаться в Telegram
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, colorClass }: { icon: any, title: string, description: string, colorClass: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 hover-lift"
  >
    <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center mb-6`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{description}</p>
  </motion.div>
);

const ReviewCard = ({ name, rating, text }: { name: string, rating: number, text: string }) => (
  <div className="glass-card p-6">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
      ))}
    </div>
    <p className="text-slate-600 italic mb-4">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
        {name[0]}
      </div>
      <span className="font-semibold text-slate-900">{name}</span>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 group"
      >
        <span className="text-lg font-medium text-slate-800 group-hover:text-brand-blue transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden"
        >
          <p className="text-slate-500 pb-4 pt-2 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const TrophyProgress = ({ game, progress, icon }: { game: string, progress: number, icon: string }) => (
  <div className="glass-card p-5 flex items-center gap-4">
    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-2xl">
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-slate-900">{game}</span>
        <span className="text-sm font-bold text-brand-blue">{progress}%</span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-brand-blue rounded-full"
        />
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft-blue to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-brand-blue text-sm font-bold mb-6 tracking-wide uppercase">
                Премиальный сервис трофеев
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
                Получите свою Платину <br />
                <span className="text-brand-blue italic">Безопасно и Легко</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                Профессиональный сервис трофеев PlayStation для клиентов из СНГ. 
                Ручная работа, полная конфиденциальность и гарантированный результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#pricing" 
                  className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
                >
                  Заказать сейчас <Zap className="w-5 h-5 fill-white" />
                </a>
                <a 
                  href="https://t.me/trophytrust" 
                  className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  Написать в Telegram <Send className="w-5 h-5 text-brand-blue" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Много</p>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Выполненных заказов</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Ручная работа</p>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Без читов и взломов</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                <Lock className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Надежно</p>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">100% Конфиденциально</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Наши Услуги" 
            subtitle="Индивидуальные решения для каждого охотника за трофеями: от отдельных достижений до полной платины."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={Trophy}
              title="Платиновые трофеи"
              description="Полное прохождение на платину для любой игры из вашей библиотеки. Мы берем гринд на себя, вы получаете результат."
              colorClass="bg-brand-soft-blue text-brand-blue"
            />
            <ServiceCard 
              icon={Zap}
              title="Сложные трофеи"
              description="Застряли на сложном испытании или поиске коллекционок? Мы зайдем и выполним это за вас."
              colorClass="bg-brand-soft-green text-brand-green"
            />
            <ServiceCard 
              icon={UserCheck}
              title="Бустинг аккаунта"
              description="Быстро повысьте уровень своего профиля PSN с помощью наборов трофеев и быстрых прохождений."
              colorClass="bg-purple-50 text-purple-600"
            />
            <ServiceCard 
              icon={MessageCircle}
              title="Индивидуальные заказы"
              description="Есть особый запрос? Свяжитесь с нами для получения персонального предложения под ваши нужды."
              colorClass="bg-orange-50 text-orange-600"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Как это работает" 
            subtitle="Простой и прозрачный процесс, созданный для вашего спокойствия."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-12 z-0" />
            
            {[
              { step: "01", title: "Выбор услуги", desc: "Выберите игру или трофей, с которыми вам нужна помощь." },
              { step: "02", title: "Свяжитесь с нами", desc: "Напишите нам в Telegram с вашим запросом." },
              { step: "03", title: "Обновления", desc: "Получайте отчеты о прогрессе в реальном времени." },
              { step: "04", title: "Готово", desc: "Наслаждайтесь новыми трофеями на вашем аккаунте." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-brand-blue">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Последние успехи" 
                subtitle="Мы гордимся нашей точностью и скоростью. Вот некоторые из наших последних выполненных проектов."
                centered={false}
              />
              <div className="space-y-4">
                <TrophyProgress game="Elden Ring" progress={100} icon="⚔️" />
                <TrophyProgress game="God of War Ragnarök" progress={100} icon="🪓" />
                <TrophyProgress game="Spider-Man 2" progress={100} icon="🕷️" />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-brand-soft-blue rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://picsum.photos/seed/playstation/800/800" 
                  alt="Playstation setup" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <Trophy className="w-10 h-10 text-brand-blue" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Ручное мастерство</h3>
                  <p className="text-slate-600 text-lg">
                    Каждый трофей зарабатывается вручную нашей опытной командой. 
                    Никакой автоматизации, никаких рисков, только чистый скилл.
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-green text-white p-6 rounded-2xl shadow-xl">
                <p className="text-sm font-bold uppercase tracking-widest mb-1">Успешность</p>
                <p className="text-4xl font-black">100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Отзывы клиентов" 
            subtitle="Не верьте нам на слово. Вот что говорит наше сообщество."
          />
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-brand-soft-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-brand-blue fill-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Сейчас собираем первые отзывы
            </h3>
            <p className="text-slate-500 text-lg mb-8">
              Сделай заказ и получи скидку за честный отзыв о нашей работе!
            </p>
            <a 
              href="https://t.me/trophytrust" 
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
            >
              Написать в Telegram <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Простые цены" 
            subtitle="Выберите план, который подходит вашим целям. Все планы включают 100% ручную работу."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard */}
            <div className="glass-card p-8 border-brand-blue ring-2 ring-brand-blue/10 relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Популярный
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 text-brand-blue">Платиновый забег</h3>
              <p className="text-slate-500 mb-4 text-sm leading-relaxed">
                Точная цена зависит от сложности, количества часов и типа трофеев (онлайн, RNG, skill)
              </p>
              
              <div className="space-y-3 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Лёгкие платины</span>
                  <span className="font-bold text-slate-900">от 40 до 70$</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Средние</span>
<<<<<<< HEAD
                  <span className="font-bold text-slate-900">70–150$</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Сложные</span>
                  <span className="font-bold text-slate-900">150–300$</span>
=======
                  <span className="font-bold text-slate-900">70–110$</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Сложные</span>
                  <span className="font-bold text-slate-900">110–200$</span>
>>>>>>> 546b205 (first commit)
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <p className="text-brand-blue font-bold text-center text-sm">
                    Цена решается лично в Telegram
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Полный платиновый трофей
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Все DLC включены
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Приоритетная поддержка
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Скриншоты прогресса
                </li>
              </ul>
              <a href="https://t.me/trophytrust" className="w-full py-3 rounded-xl bg-brand-blue text-white text-center font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Обсудить в Telegram
              </a>
            </div>

            {/* Premium */}
            <div className="glass-card p-8 border-slate-200 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Элитный охотник</h3>
              <p className="text-slate-500 mb-6">Для ультимативной коллекции.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">Индивидуально</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Пакет из нескольких игр
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Прокачка уровня аккаунта
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Персональный менеджер
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Консультация 1-на-1
                </li>
              </ul>
              <a href="https://t.me/trophytrust" className="w-full py-3 rounded-xl border border-slate-200 text-center font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                Узнать цену
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Часто задаваемые вопросы" />
          <div className="space-y-2">
            <FAQItem 
              question="Безопасно ли это для моего аккаунта PlayStation?" 
              answer="Да, абсолютно. Мы выполняем всю работу вручную на реальных консолях. Мы не используем читы, взломы или стороннее ПО, которое может привести к бану. Безопасность вашего аккаунта — наш приоритет №1."
            />
            <FAQItem 
              question="Могут ли меня забанить в PSN?" 
              answer="У нас 0% банов. Поскольку мы играем честно, системы Sony видят это как обычный игровой процесс. Мы также используем VPN вашего региона для дополнительной безопасности."
            />
            <FAQItem 
              question="Сколько времени занимает получение Платины?" 
              answer="Это обсуждается индивидуально в Telegram. Однако сроки также зависят от сложности трофеев. Обычно выполнение занимает не более недели."
            />
            <FAQItem 
              question="Нужны ли вам мои данные для входа?" 
              answer="Да, нам нужен доступ к аккаунту, чтобы заработать трофеи. Мы рекомендуем установить временный пароль и включить 2FA. Мы будем заходить только в оговоренное время."
            />
            <FAQItem 
              question="Могу ли я играть, пока вы работаете?" 
              answer="Мы координируем график так, чтобы вы могли пользоваться аккаунтом. Мы сообщим вам, когда начинаем и заканчиваем каждую сессию."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Готовы прокачать свой профиль?</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Присоединяйтесь к 100+ довольным клиентам и получите платину своей мечты уже сегодня. 
            Профессионально, надежно и с гарантией.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://t.me/trophytrust" 
              className="bg-white text-brand-blue px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              Связаться в Telegram <Send className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-blue p-1.5 rounded-lg">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight text-slate-900">TrophyTrust</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                Ведущий сервис трофеев PlayStation в СНГ. 
                Построено на доверии, выполнено с мастерством.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-soft-blue transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-soft-blue transition-all">
                  <Send className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-soft-blue transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Навигация</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-slate-500 hover:text-brand-blue transition-colors">Услуги</a></li>
                <li><a href="#how-it-works" className="text-slate-500 hover:text-brand-blue transition-colors">Как это работает</a></li>
                <li><a href="#portfolio" className="text-slate-500 hover:text-brand-blue transition-colors">Портфолио</a></li>
                <li><a href="#pricing" className="text-slate-500 hover:text-brand-blue transition-colors">Цены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Поддержка</h4>
              <ul className="space-y-4">
                <li><a href="#faq" className="text-slate-500 hover:text-brand-blue transition-colors">FAQ</a></li>
                <li><a href="https://t.me/trophytrust" className="text-slate-500 hover:text-brand-blue transition-colors">Контакты</a></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-blue transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-blue transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} TrophyTrust. Все права защищены.
            </p>
            <p className="text-slate-400 text-xs text-center md:text-right max-w-md">
              TrophyTrust не связан с Sony Interactive Entertainment или PlayStation. 
              Все названия игр и логотипы являются товарными знаками их владельцев.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

