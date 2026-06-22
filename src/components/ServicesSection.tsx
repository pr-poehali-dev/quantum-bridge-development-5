import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Code, Share2, Target, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Лендинги",
    description:
      "Создаём продающие одностраничные сайты для услуг, акций и запуска товаров. Цепляющий первый экран, понятная структура и форма заявки — всё, чтобы посетитель стал клиентом.",
  },
  {
    icon: Code,
    title: "Сайты-визитки",
    description:
      "Компактный сайт, который расскажет о вашей компании, услугах и контактах. Идеально для локального бизнеса, которому нужно быстро и недорого заявить о себе в интернете.",
  },
  {
    icon: Layout,
    title: "Корпоративные сайты",
    description:
      "Небольшие многостраничные сайты с каталогом услуг, портфолио и блогом. Растут вместе с вашим бизнесом и работают на репутацию бренда.",
  },
  {
    icon: Search,
    title: "SEO-оптимизация",
    description:
      "Настраиваем сайт так, чтобы его легко находили в Яндексе и Google. Локальные клиенты увидят вас первыми, когда будут искать ваши услуги поблизости.",
  },
  {
    icon: Target,
    title: "Запуск за пару дней",
    description:
      "Благодаря ИИ мы собираем готовый сайт в разы быстрее обычных студий. Вы получаете результат за дни, а не за недели, без потери качества.",
  },
  {
    icon: Palette,
    title: "Дизайн и контент",
    description:
      "Подберём стиль под ваш бренд, оформим тексты и подготовим изображения. Сайт будет выглядеть современно и профессионально — без лишних затрат.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Всё, что нужно локальному бизнесу для запуска в интернете — современный сайт, который приводит клиентов, по доступной цене.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}