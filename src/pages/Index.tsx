import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface SkinItem {
  id: string;
  name: string;
  weapon: string;
  rarity: string;
  price: number;
  image: string;
  condition: string;
  tradeable: boolean;
}

interface CaseItem {
  id: string;
  name: string;
  price: number;
  image: string;
  skins: number;
}

const mockSkins: SkinItem[] = [
  {
    id: '1',
    name: 'SCP-173 Edition',
    weapon: 'AK-47',
    rarity: 'Legendary',
    price: 450.99,
    image: '/img/26218210-d4bc-45d7-bf9a-3774fa8dc089.jpg',
    condition: 'Factory New',
    tradeable: true
  },
  {
    id: '2',
    name: 'Containment Breach',
    weapon: 'M4A4',
    rarity: 'Rare',
    price: 189.50,
    image: '/img/6cd65139-b3c7-4482-8dfb-14991695ee5e.jpg',
    condition: 'Minimal Wear',
    tradeable: true
  },
  {
    id: '3',
    name: 'D-Class Protocol',
    weapon: 'AWP',
    rarity: 'Epic',
    price: 890.00,
    image: '/img/26218210-d4bc-45d7-bf9a-3774fa8dc089.jpg',
    condition: 'Field Tested',
    tradeable: false
  },
  {
    id: '4',
    name: 'Foundation Guardian',
    weapon: 'Glock-18',
    rarity: 'Common',
    price: 45.20,
    image: '/img/6cd65139-b3c7-4482-8dfb-14991695ee5e.jpg',
    condition: 'Well Worn',
    tradeable: true
  }
];

const mockCases: CaseItem[] = [
  {
    id: '1',
    name: 'SCP Foundation Case',
    price: 2.49,
    image: '/img/1af5aa7f-e3df-4143-851f-4fdbd1bd8f2d.jpg',
    skins: 17
  },
  {
    id: '2',
    name: 'Anomalous Collection',
    price: 4.99,
    image: '/img/1af5aa7f-e3df-4143-851f-4fdbd1bd8f2d.jpg',
    skins: 24
  }
];

const mockStats = {
  totalValue: 2456.78,
  itemsOwned: 47,
  successfulTrades: 123,
  steamLevel: 42
};

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('showcase');
  const [userConnected, setUserConnected] = useState(false);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'bg-yellow-500';
      case 'Epic': return 'bg-purple-500';
      case 'Rare': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-['Roboto_Condensed']">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-primary">
                SCP SKINS TRADING
              </div>
              <Badge variant="secondary" className="text-xs">
                SECURE • CONTAIN • TRADE
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              {!userConnected ? (
                <Button 
                  onClick={() => setUserConnected(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Icon name="Steam" className="w-4 h-4 mr-2" fallback="LogIn" />
                  Login via Steam
                </Button>
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="text-sm">
                    <div className="font-medium">Dr. █████</div>
                    <div className="text-muted-foreground">Level {mockStats.steamLevel}</div>
                  </div>
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" className="w-5 h-5" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-transparent">
              <TabsTrigger value="showcase" className="data-[state=active]:bg-primary/20">
                <Icon name="Home" className="w-4 h-4 mr-2" />
                Showcase
              </TabsTrigger>
              <TabsTrigger value="inventory" className="data-[state=active]:bg-primary/20">
                <Icon name="Package" className="w-4 h-4 mr-2" />
                Inventory
              </TabsTrigger>
              <TabsTrigger value="market" className="data-[state=active]:bg-primary/20">
                <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                Market
              </TabsTrigger>
              <TabsTrigger value="trade" className="data-[state=active]:bg-primary/20">
                <Icon name="ArrowRightLeft" className="w-4 h-4 mr-2" />
                Trade
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-primary/20">
                <Icon name="Clock" className="w-4 h-4 mr-2" />
                History
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} className="w-full">
          {/* Showcase Tab */}
          <TabsContent value="showcase" className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">
                SECURE • CONTAIN • <span className="text-primary">TRADE</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Торговая платформа аномальных предметов. Авторизация через Steam.
                Покупай, продавай и обменивай скины в безопасной среде.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Shield" className="w-5 h-5 text-primary" />
                    <span>Безопасность</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Все сделки проходят через защищенную систему Steam API
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Zap" className="w-5 h-5 text-primary" />
                    <span>Быстрый трейд</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Мгновенная обработка сделок и автоматический обмен
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="TrendingUp" className="w-5 h-5 text-primary" />
                    <span>Выгодные курсы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Лучшие цены на рынке с минимальной комиссией
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Топ предложения</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockSkins.slice(0, 4).map((skin) => (
                  <Card key={skin.id} className="bg-card/80 hover:bg-card/90 transition-colors group">
                    <CardContent className="p-4 space-y-3">
                      <div className="aspect-video relative overflow-hidden rounded-md bg-muted">
                        <img 
                          src={skin.image} 
                          alt={skin.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <Badge 
                          className={`absolute top-2 right-2 ${getRarityColor(skin.rarity)} text-white`}
                        >
                          {skin.rarity}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-sm">{skin.weapon}</h3>
                        <p className="text-xs text-muted-foreground">{skin.name}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-bold">${skin.price}</span>
                          <Button size="sm" className="h-7 text-xs">
                            Buy
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Мой инвентарь</h2>
              <div className="flex items-center space-x-4 text-sm">
                <span>Общая стоимость: <span className="text-primary font-bold">${mockStats.totalValue}</span></span>
                <span>Предметов: <span className="text-primary font-bold">{mockStats.itemsOwned}</span></span>
              </div>
            </div>

            {!userConnected ? (
              <Card className="p-8 text-center">
                <Icon name="Lock" className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Войдите через Steam</h3>
                <p className="text-muted-foreground mb-4">
                  Для просмотра инвентаря необходимо авторизоваться
                </p>
                <Button onClick={() => setUserConnected(true)}>
                  <Icon name="LogIn" className="w-4 h-4 mr-2" />
                  Login via Steam
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mockSkins.map((skin) => (
                  <Card key={skin.id} className="bg-card/80">
                    <CardContent className="p-4 space-y-3">
                      <div className="aspect-video relative overflow-hidden rounded-md bg-muted">
                        <img 
                          src={skin.image} 
                          alt={skin.name}
                          className="w-full h-full object-cover"
                        />
                        <Badge 
                          className={`absolute top-2 right-2 ${getRarityColor(skin.rarity)} text-white`}
                        >
                          {skin.rarity}
                        </Badge>
                        {!skin.tradeable && (
                          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                            Non-Tradeable
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-sm">{skin.weapon}</h3>
                        <p className="text-xs text-muted-foreground">{skin.name}</p>
                        <p className="text-xs text-muted-foreground">{skin.condition}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-bold">${skin.price}</span>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                              <Icon name="ArrowRightLeft" className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                              <Icon name="ShoppingCart" className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Market Tab */}
          <TabsContent value="market" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Магазин</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Icon name="Filter" className="w-4 h-4 mr-2" />
                  Фильтры
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="ArrowUpDown" className="w-4 h-4 mr-2" />
                  Сортировка
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Кейсы</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockCases.map((caseItem) => (
                    <Card key={caseItem.id} className="bg-card/80 hover:bg-card/90 transition-colors">
                      <CardContent className="p-4 space-y-3">
                        <div className="aspect-video relative overflow-hidden rounded-md bg-muted">
                          <img 
                            src={caseItem.image} 
                            alt={caseItem.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium text-sm">{caseItem.name}</h3>
                          <p className="text-xs text-muted-foreground">{caseItem.skins} предметов</p>
                          <div className="flex items-center justify-between">
                            <span className="text-primary font-bold">${caseItem.price}</span>
                            <Button size="sm" className="h-7 text-xs">
                              <Icon name="Package" className="w-3 h-3 mr-1" />
                              Open
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Скины</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockSkins.map((skin) => (
                    <Card key={skin.id} className="bg-card/80 hover:bg-card/90 transition-colors">
                      <CardContent className="p-4 space-y-3">
                        <div className="aspect-video relative overflow-hidden rounded-md bg-muted">
                          <img 
                            src={skin.image} 
                            alt={skin.name}
                            className="w-full h-full object-cover"
                          />
                          <Badge 
                            className={`absolute top-2 right-2 ${getRarityColor(skin.rarity)} text-white`}
                          >
                            {skin.rarity}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium text-sm">{skin.weapon}</h3>
                          <p className="text-xs text-muted-foreground">{skin.name}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-primary font-bold">${skin.price}</span>
                            <Button size="sm" className="h-7 text-xs">
                              Buy
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Trade Tab */}
          <TabsContent value="trade" className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Обмен предметов</h2>
              <p className="text-muted-foreground">
                Создавайте торговые предложения и обменивайтесь предметами с другими игроками
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="User" className="w-5 h-5" />
                    <span>Ваши предметы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-48 border-2 border-dashed border-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Icon name="Plus" className="w-8 h-8 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Добавьте предметы для обмена
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Стоимость: <span className="text-foreground font-medium">$0.00</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Users" className="w-5 h-5" />
                    <span>Предметы партнера</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-48 border-2 border-dashed border-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Icon name="Search" className="w-8 h-8 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Найдите партнера для обмена
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Стоимость: <span className="text-foreground font-medium">$0.00</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button className="bg-primary hover:bg-primary/90" disabled>
                <Icon name="ArrowRightLeft" className="w-4 h-4 mr-2" />
                Создать предложение
              </Button>
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">История операций</h2>
              <div className="text-sm text-muted-foreground">
                Успешных сделок: <span className="text-primary font-bold">{mockStats.successfulTrades}</span>
              </div>
            </div>

            <Card className="bg-card/80">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { type: 'buy', item: 'AK-47 | SCP-173 Edition', price: 450.99, date: '2024-01-15', status: 'completed' },
                    { type: 'sell', item: 'M4A4 | Containment Breach', price: 189.50, date: '2024-01-14', status: 'completed' },
                    { type: 'trade', item: 'AWP | D-Class Protocol', price: 890.00, date: '2024-01-13', status: 'pending' },
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          transaction.type === 'buy' ? 'bg-green-500' : 
                          transaction.type === 'sell' ? 'bg-red-500' : 'bg-blue-500'
                        }`} />
                        <div>
                          <p className="font-medium text-sm">{transaction.item}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <p className={`font-medium text-sm ${
                          transaction.type === 'buy' ? 'text-red-500' : 'text-green-500'
                        }`}>
                          {transaction.type === 'buy' ? '-' : '+'}${transaction.price}
                        </p>
                        <Badge 
                          variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-primary mb-3">SCP SKINS TRADING</h3>
              <p className="text-sm text-muted-foreground">
                Официальная торговая платформа аномальных предметов.
                Лицензия Фонда SCP: ████-████-████
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Правила сайта</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Безопасность</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщить о проблеме</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-4 text-center text-sm text-muted-foreground">
            © 2024 SCP Skins Trading. Все права защищены. 
            <span className="block mt-1">КЛАССИФИКАЦИЯ: ЕВКЛИД</span>
          </div>
        </div>
      </footer>
    </div>
  );
}