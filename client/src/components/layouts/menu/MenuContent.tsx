import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { type MenuItem } from '@/data/mock'
import { MenuCard } from './MenuCard'

interface MenuContentProps {
  menuItems: MenuItem[];
}

export function MenuContent({ menuItems }: MenuContentProps) {
  const categories = [...new Set(menuItems.map(item => item.category))]

  return (
    <section className="container mx-auto px-4 py-16" id="menu">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Our Featured Menu</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our carefully curated selection of signature dishes, crafted to perfection.
        </p>
      </div>

      <Tabs defaultValue={categories[0] || 'all'} className="w-full flex flex-col items-center">
        <div className="w-full overflow-x-auto pb-4 mb-8 flex justify-center no-scrollbar">
          <TabsList className="inline-flex h-12 items-center justify-center rounded-full bg-muted p-1 text-muted-foreground px-4 shadow-sm">
            <TabsTrigger value="all" className="rounded-full px-6 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
              All Items
            </TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="rounded-full px-6 text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm capitalize">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="w-full max-w-7xl">
          <TabsContent value="all" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {menuItems.map(item => (
                <MenuCard key={item._id} item={item} />
              ))}
            </div>
          </TabsContent>

          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {menuItems
                  .filter(item => item.category === category)
                  .map(item => (
                    <MenuCard key={item._id} item={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  )
}
