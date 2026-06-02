import { Eye, Users, BookOpen } from "lucide-react"

const marketActivities = [
  {
    icon: Eye,
    title: "Broker Previews & Open Houses",
    description: "Staying ahead of market inventory through active participation in exclusive broker previews and open houses across NYC boroughs.",
  },
  {
    icon: Users,
    title: "Elite Network & Events",
    description: "Building connections with top developers, brokerages, and industry leaders through consistent networking at premium real estate events.",
  },
  {
    icon: BookOpen,
    title: "Continuous Expertise",
    description: "Committed to continuous market education and data-driven insights to deliver the best outcomes for every client.",
  },
]

export function ActiveMarketSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            On-The-Ground Presence
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Active in the Market, Every Day
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real estate success comes from being where the action is. I maintain a constant presence in the NYC market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {marketActivities.map((activity, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <activity.icon className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {activity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
              {/* Image placeholder */}
              <div className="mt-6 aspect-video bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  Media Placeholder
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
