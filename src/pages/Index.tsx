import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const projects = [
    {
      id: 1,
      title: 'Жилой комплекс "Новая высота"',
      description: 'Современный жилой комплекс премиум-класса, 25 этажей',
      image: '/placeholder.svg',
      area: '15 000 м²',
      year: '2023'
    },
    {
      id: 2,
      title: 'Бизнес-центр "Столица"',
      description: 'Многофункциональный офисный комплекс класса А',
      image: 'https://cdn.poehali.dev/projects/762864a4-89cd-4d73-a2b9-f07756667ca0/files/f5f163a6-e47d-4c1d-ac5d-9cb6c9eb4167.jpg',
      area: '32 000 м²',
      year: '2022'
    },
    {
      id: 3,
      title: 'ТЦ "Панорама"',
      description: 'Торгово-развлекательный центр с панорамным остеклением',
      image: 'https://cdn.poehali.dev/projects/762864a4-89cd-4d73-a2b9-f07756667ca0/files/43f2ec3d-a8af-4f91-a89a-541848529ab4.jpg',
      area: '28 000 м²',
      year: '2023'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={32} className="text-accent" />
            <h1 className="text-2xl font-bold text-primary">СтройДом</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-foreground hover:text-accent transition-colors">
              Проекты
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Контакты
            </a>
            <Button className="bg-accent hover:bg-accent/90">
              Заказать звонок
            </Button>
          </nav>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Строим будущее с надёжностью
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональное строительство жилых комплексов, бизнес-центров и торговых площадей под ключ. 
                Более 15 лет опыта и 200+ реализованных проектов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/762864a4-89cd-4d73-a2b9-f07756667ca0/files/294311c9-44f8-4748-af4d-65c1012cd0a6.jpg" 
                alt="Строительство" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <Icon name="Award" size={48} className="mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">лет опыта</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Building" size={48} className="mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">проектов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Users" size={48} className="mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">сотрудников</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Icon name="ThumbsUp" size={48} className="mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Наши проекты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Портфолио успешно реализованных объектов различного назначения
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Ruler" size={16} className="text-accent" />
                      <span>{project.area}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Email</div>
                    <div className="text-muted-foreground">info@stroydom.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Строителей, д. 1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input 
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input 
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите о вашем проекте..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} className="text-accent" />
                <h3 className="text-xl font-bold">СтройДом</h3>
              </div>
              <p className="text-sm opacity-80">
                Профессиональное строительство с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-accent transition-colors">Жилые комплексы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Бизнес-центры</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Торговые центры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@stroydom.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
            © 2024 СтройДом. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;