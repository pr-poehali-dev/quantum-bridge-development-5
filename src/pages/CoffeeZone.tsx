import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const menuItems = [
  { name: "Эспрессо", desc: "Классический итальянский эспрессо из отборных зёрен", price: "120 ₽", emoji: "☕" },
  { name: "Капучино", desc: "Нежная молочная пенка и насыщенный кофе", price: "180 ₽", emoji: "🍵" },
  { name: "Латте", desc: "Мягкий вкус, идеальный баланс кофе и молока", price: "200 ₽", emoji: "🥛" },
  { name: "Флэт Уайт", desc: "Двойной эспрессо с бархатистым молоком", price: "210 ₽", emoji: "☕" },
  { name: "Круассан", desc: "Свежеиспечённый, хрустящий, с маслом", price: "150 ₽", emoji: "🥐" },
  { name: "Чизкейк", desc: "Нежный десерт по классическому рецепту", price: "250 ₽", emoji: "🍰" },
]

const features = [
  { icon: "Coffee", title: "Зерно из Эфиопии", desc: "Отборные зёрна высокогорной арабики с фруктовыми нотами" },
  { icon: "Flame", title: "Авторская обжарка", desc: "Обжариваем сами — каждую неделю свежая партия" },
  { icon: "Heart", title: "Уютная атмосфера", desc: "Мягкий свет, живая музыка и диваны, где хочется остаться" },
  { icon: "Wifi", title: "Быстрый Wi-Fi", desc: "Работайте с удовольствием — бесплатный интернет без лимитов" },
]

const testimonials = [
  { name: "Алиса", role: "Постоянный гость", text: "Лучший капучино в городе — это не преувеличение. Хожу каждое утро уже год!" },
  { name: "Максим", role: "Фрилансер", text: "Работаю здесь почти каждый день. Отличный Wi-Fi, никто не торопит, кофе топовый." },
  { name: "Катя", role: "Дизайнер", text: "Атмосфера вдохновляет. Заказываю латте и чизкейк — идеальный творческий тандем." },
]

export default function CoffeeZone() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })

  return (
    <div className="min-h-screen bg-[#1a1008] text-[#f5e6d0] font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1008]/90 backdrop-blur-md border-b border-[#3d2b1a]">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <span className="text-xl font-bold text-[#d4a06a]">Coffee Zone</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#c4a882]">
            <a href="#menu" className="hover:text-[#d4a06a] transition-colors">Меню</a>
            <a href="#about" className="hover:text-[#d4a06a] transition-colors">О нас</a>
            <a href="#reviews" className="hover:text-[#d4a06a] transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-[#d4a06a] transition-colors">Контакты</a>
          </div>
          <Button
            className="bg-[#d4a06a] hover:bg-[#c4905a] text-[#1a1008] font-semibold"
            asChild
          >
            <a href="#contact">Забронировать стол</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/9fbe74bc-1a39-4190-9981-5a3c0c66bbf2/files/395208ab-c9a0-4860-af63-4152d427a856.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1008]/70 via-[#1a1008]/50 to-[#1a1008]" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a06a]/20 border border-[#d4a06a]/30 mb-6">
            <span className="text-[#d4a06a] text-sm font-medium">Открыты с 8:00 до 22:00</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Место, где{" "}
            <span className="text-[#d4a06a]">кофе</span>
            <br />
            становится ритуалом
          </h1>
          <p className="text-xl text-[#c4a882] mb-10 max-w-2xl mx-auto leading-relaxed">
            Авторский кофе из зёрен прямой обжарки, уютная атмосфера и десерты, от которых сложно оторваться.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#d4a06a] hover:bg-[#c4905a] text-[#1a1008] font-bold px-8 py-6 text-lg"
              asChild
            >
              <a href="#menu">Смотреть меню</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#d4a06a]/40 text-[#f5e6d0] hover:bg-[#d4a06a]/10 hover:border-[#d4a06a] px-8 py-6 text-lg bg-transparent"
              asChild
            >
              <a href="#contact">Забронировать стол</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-[#d4a06a] text-sm font-semibold uppercase tracking-widest mb-3">Почему выбирают нас</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Не просто кофейня —<br />
              <span className="text-[#d4a06a]">место силы</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="bg-[#261508] border-[#3d2b1a] hover:border-[#d4a06a]/50 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#d4a06a]/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4a06a]/25 transition-colors">
                    <Icon name={f.icon} size={24} className="text-[#d4a06a]" />
                  </div>
                  <h3 className="font-bold text-[#f5e6d0] mb-2">{f.title}</h3>
                  <p className="text-sm text-[#a08060] leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-4 bg-[#150d05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-[#d4a06a] text-sm font-semibold uppercase tracking-widest mb-3">Наше меню</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Всё для идеального{" "}
              <span className="text-[#d4a06a]">момента</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-5 rounded-xl bg-[#261508] border border-[#3d2b1a] hover:border-[#d4a06a]/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-[#f5e6d0] group-hover:text-[#d4a06a] transition-colors">{item.name}</h3>
                    <p className="text-sm text-[#a08060]">{item.desc}</p>
                  </div>
                </div>
                <span className="font-bold text-[#d4a06a] whitespace-nowrap ml-4">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <img
              src="https://cdn.poehali.dev/projects/9fbe74bc-1a39-4190-9981-5a3c0c66bbf2/files/b27f4e3c-5ae5-420f-8c2c-c39d9834667b.jpg"
              alt="Coffee Zone меню"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-[#d4a06a] text-sm font-semibold uppercase tracking-widest mb-3">Отзывы</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Что говорят наши{" "}
              <span className="text-[#d4a06a]">гости</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-[#261508] border-[#3d2b1a] hover:border-[#d4a06a]/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-[#d4a06a]">★</span>
                    ))}
                  </div>
                  <p className="text-[#c4a882] leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-[#f5e6d0]">{t.name}</p>
                    <p className="text-sm text-[#a08060]">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + CTA */}
      <section className="py-20 px-4 bg-[#150d05]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden h-80 md:h-96">
              <img
                src="https://cdn.poehali.dev/projects/9fbe74bc-1a39-4190-9981-5a3c0c66bbf2/files/3f62104f-3d71-460b-80fa-1c17afee367b.jpg"
                alt="Coffee Zone кофе"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#d4a06a] text-sm font-semibold uppercase tracking-widest mb-3">Наш кофе</p>
              <h2 className="text-4xl font-bold mb-5">
                Каждая чашка —<br />
                <span className="text-[#d4a06a]">маленький шедевр</span>
              </h2>
              <p className="text-[#a08060] leading-relaxed mb-4">
                Мы сотрудничаем напрямую с фермерами из Эфиопии и Колумбии. Зерно приезжает свежим, обжаривается небольшими партиями и превращается в напиток, который запоминается.
              </p>
              <p className="text-[#a08060] leading-relaxed mb-8">
                Наши бариста проходят обучение и постоянно участвуют в чемпионатах. Каждый напиток — результат мастерства и любви к делу.
              </p>
              <Button
                className="bg-[#d4a06a] hover:bg-[#c4905a] text-[#1a1008] font-bold px-8 py-5"
                asChild
              >
                <a href="#contact">Приходите к нам</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#d4a06a] text-sm font-semibold uppercase tracking-widest mb-3">Контакты</p>
              <h2 className="text-4xl font-bold mb-6">
                Приходите в{" "}
                <span className="text-[#d4a06a]">Coffee Zone</span>
              </h2>
              <div className="space-y-5 text-[#c4a882]">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-[#d4a06a] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#f5e6d0]">Адрес</p>
                    <p>ул. Кофейная, 12, Москва</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-[#d4a06a] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#f5e6d0]">Часы работы</p>
                    <p>Пн–Пт: 8:00 – 22:00</p>
                    <p>Сб–Вс: 9:00 – 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-[#d4a06a] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#f5e6d0]">Телефон</p>
                    <p>+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Instagram" size={20} className="text-[#d4a06a] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#f5e6d0]">Instagram</p>
                    <p>@coffeezone.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#261508] rounded-2xl p-8 border border-[#3d2b1a]">
              <h3 className="text-xl font-bold mb-6 text-[#f5e6d0]">Забронировать стол</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-[#a08060] mb-1 block">Ваше имя</label>
                  <Input
                    placeholder="Александр"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="bg-[#1a1008] border-[#3d2b1a] text-[#f5e6d0] placeholder:text-[#5a4030] focus:border-[#d4a06a]"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#a08060] mb-1 block">Телефон</label>
                  <Input
                    placeholder="+7 (999) 000-00-00"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="bg-[#1a1008] border-[#3d2b1a] text-[#f5e6d0] placeholder:text-[#5a4030] focus:border-[#d4a06a]"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#a08060] mb-1 block">Пожелания</label>
                  <Textarea
                    placeholder="Количество гостей, дата и время..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="bg-[#1a1008] border-[#3d2b1a] text-[#f5e6d0] placeholder:text-[#5a4030] focus:border-[#d4a06a] resize-none"
                  />
                </div>
                <Button className="w-full bg-[#d4a06a] hover:bg-[#c4905a] text-[#1a1008] font-bold py-5 text-base">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#3d2b1a] py-8 px-4 bg-[#150d05]">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-[#a08060] text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">☕</span>
            <span className="font-bold text-[#d4a06a]">Coffee Zone</span>
          </div>
          <p>2026 Coffee Zone. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#menu" className="hover:text-[#d4a06a] transition-colors">Меню</a>
            <a href="#about" className="hover:text-[#d4a06a] transition-colors">О нас</a>
            <a href="#contact" className="hover:text-[#d4a06a] transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
