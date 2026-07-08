window.LEON_MENU = [
  {
    id: 'espresso-kahveler',
    title: 'Espresso Kahve Çeşitleri',
    shortTitle: 'Espresso',
    kicker: 'Coffee Bar',
    description: 'Espresso bazlı kahveler. Sıcak ve soğuk servislerde fiyat aynıdır.',
    image: 'assets/coffee.jpg',
    accent: 'accent-coffee',
    imagePosition: 'center',
    notes: ['Soğuk ve sıcak fiyat aynıdır.'],
    highlights: ['Americano 250 TL', 'Latte 275 TL', 'Türk Kahvesi 120 TL'],
    groups: [
      {
        title: 'Espresso Bazlı Seçimler',
        layout: 'list',
        items: [
          { name: 'Americano', price: 250 },
          { name: 'Latte', price: 275 },
          { name: 'Cappuccino', price: 275 },
          { name: 'Mocha', price: 275 },
          { name: 'Macchiato', price: 275 },
          { name: 'Flat White', price: 275 },
          { name: 'Nescafe', price: 175 },
          { name: 'Sütlü Nescafe', price: 200 },
          { name: 'Türk Kahvesi', price: 120 },
          { name: 'Filtre Kahve', price: 250 },
          { name: 'Sütlü Filtre Kahve', price: 275 }
        ]
      }
    ]
  },
  {
    id: 'serinleten-lezzetler',
    title: 'Serinleten Lezzetler',
    shortTitle: 'Frozenlar',
    kicker: 'Fresh Menu',
    description: 'Milkshake, frozen ve frappe çeşitleri ile renkli ve ferah seçenekler.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Strawberry_milk_shake_%28cropped%29.jpg',
    accent: 'accent-fresh',
    imagePosition: 'center center',
    highlights: ['Milkshake 300 TL', 'Frozen 300 TL', 'Frappe 300 TL'],
    groups: [
      {
        title: 'Milkshake',
        price: 300,
        note: 'Tatlı ve yoğun kıvamlı seriler.',
        layout: 'chips',
        items: [
          { name: 'Çikolata' },
          { name: 'Vanilya' },
          { name: 'Muz' },
          { name: 'Çilek' },
          { name: 'Karamel' },
          { name: 'Oreo' },
          { name: 'Lotus' }
        ]
      },
      {
        title: 'Frozen',
        price: 300,
        note: 'Meyve bazlı buzlu karışımlar.',
        layout: 'chips',
        items: [
          { name: 'Çilek' },
          { name: 'Mango' },
          { name: 'Şeftali' },
          { name: 'Karpuz' },
          { name: 'Kavun' },
          { name: 'Passion Fruit' },
          { name: 'Yeşil Elma' },
          { name: 'Kivi' },
          { name: 'Nane Limon' }
        ]
      },
      {
        title: 'Frozen Special',
        price: 300,
        note: 'Karışık meyve kombinleri.',
        layout: 'chips',
        items: [
          { name: 'Çilek - Muz' },
          { name: 'Mango - Passion' },
          { name: 'Orman Meyveleri' },
          { name: 'Yeşil Elma - Kivi' },
          { name: 'Karpuz - Kavun' }
        ]
      },
      {
        title: 'Frappe',
        price: 300,
        layout: 'chips',
        items: [
          { name: 'Vanilya' },
          { name: 'Çikolata' },
          { name: 'Karamel' },
          { name: 'Lotus' },
          { name: 'Oreo' }
        ]
      }
    ]
  },
  {
    id: 'soguk-mesrubatlar',
    title: 'Soğuk Meşrubatlar',
    shortTitle: 'Meşrubatlar',
    kicker: 'Cold Selection',
    description: 'Soft içecekler, su ve limonata çeşitleri tek bölümde.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Lemonade_-_27682817724.jpg',
    accent: 'accent-cold',
    imagePosition: 'center center',
    highlights: ['Kola 150 TL', 'Limonata 220 TL', 'Aromalı Limonata 250 TL'],
    groups: [
      {
        title: 'Soğuk İçecekler',
        layout: 'list',
        items: [
          { name: 'Kola', price: 150 },
          { name: 'Fanta', price: 150 },
          { name: 'Soğuk Çay', price: 150 },
          { name: 'Soda', price: 80 },
          { name: 'Su', price: 40 }
        ]
      },
      {
        title: 'Limonata',
        layout: 'list',
        items: [{ name: 'Klasik Limonata', price: 220 }]
      },
      {
        title: 'Aromalı Limonata',
        price: 250,
        layout: 'chips',
        items: [
          { name: 'Çilek' },
          { name: 'Mango' },
          { name: 'Nane' },
          { name: 'Böğürtlen' },
          { name: 'Tropikal' },
          { name: 'Blue Curaçao' }
        ]
      }
    ]
  },
  {
    id: 'redbull-signature',
    title: 'Red Bull ve Signature Karışımlar',
    shortTitle: 'Red Bull',
    kicker: 'Energy Drinks',
    description: 'Red Bull bazlı karışımlar ve Léon signature serileri.',
    image: 'assets/iced-coffee.jpg',
    accent: 'accent-energy',
    imagePosition: 'center center',
    highlights: ['Red Bull Kokteyl 450 TL', 'Pink Sunset 450 TL', 'Galaxy 450 TL'],
    groups: [
      {
        title: 'Red Bull Kokteyl',
        price: 450,
        layout: 'chips',
        items: [
          { name: 'Tropical' },
          { name: 'Green Apple' },
          { name: 'Red Bull Mojito' },
          { name: 'Peach' },
          { name: 'Passion' },
          { name: 'Strawberry' },
          { name: 'Leon Special', note: 'Çilek ve mango' }
        ]
      },
      {
        title: 'Red Bull Special',
        price: 450,
        layout: 'chips',
        items: [
          { name: 'Fresh Leon', note: 'Ananas ve limon' },
          { name: 'Green Leon', note: 'Yeşil elma ve kivi' },
          { name: 'Tropic Leon', note: 'Mango ve passion' },
          { name: '50-50 Leon', note: 'Kavun ve limon' }
        ]
      },
      {
        title: 'Léon Signature Mixler',
        layout: 'list',
        items: [
          { name: 'Pink Sunset', note: 'Çilek, şeftali ve limonata', price: 450 },
          { name: 'Golden Mango', note: 'Mango ve portakal', price: 450 },
          { name: 'Galaxy', note: 'Blue Curaçao, böğürtlen, sprite ve limon', price: 450 }
        ]
      }
    ]
  },
  {
    id: 'alkollu-kokteyller',
    title: 'Alkollü Kokteyller',
    shortTitle: 'Kokteyller',
    kicker: 'Cocktail Bar',
    description: 'Klasik kokteyller ve imza karışımlar bar menüsünde bir arada.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Margarita.jpg',
    accent: 'accent-cocktail',
    imagePosition: 'center center',
    highlights: ['Mojito 500 TL', 'Aperol Spritz 700 TL', 'Mathilda 550 TL'],
    groups: [
      {
        title: 'Kokteyl Listesi',
        layout: 'list',
        items: [
          { name: 'Mojito', price: 500 },
          { name: 'Margarita', price: 600 },
          { name: 'Long Island Ice Tea', price: 600 },
          { name: 'Lincburg Lemonade', price: 600 },
          { name: 'Mimosa', price: 550 },
          { name: 'Cuba Libre', price: 500 },
          { name: 'Daiquiri', price: 500 },
          { name: 'Aperol Spritz', price: 700 },
          { name: 'French 75', price: 600 },
          { name: 'Blue Lagoon', price: 500 },
          { name: 'Gin Tonic', price: 500 },
          { name: 'Tom Collins', price: 500 },
          {
            name: 'Mathilda',
            price: 550,
            note: 'Yeşil elma, kivi, ananas, limon suyu, votka ve portakal'
          }
        ]
      }
    ]
  },
  {
    id: 'biralar-frozen',
    title: 'Biralar ve Alkollü Frozen',
    shortTitle: 'Biralar',
    kicker: 'Beer Corner',
    description: 'Şişe bira seçenekleri ve alkollü frozen aromaları.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Beer_in_glasses_and_steins.jpg',
    accent: 'accent-beer',
    imagePosition: 'center center',
    highlights: ['Tuborg Gold 275 TL', 'Corona 325 TL', 'Alkollü Frozen 450 TL'],
    groups: [
      {
        title: 'Biralar',
        layout: 'list',
        items: [
          { name: 'Tuborg Gold', price: 275 },
          { name: 'Carlsberg', price: 300 },
          { name: 'Corona', price: 325 }
        ]
      },
      {
        title: 'Alkollü Frozen',
        price: 450,
        layout: 'chips',
        items: [
          { name: 'Çilek' },
          { name: 'Mango' },
          { name: 'Şeftali' },
          { name: 'Karpuz' },
          { name: 'Kavun' },
          { name: 'Passion Fruit' },
          { name: 'Yeşil Elma' },
          { name: 'Kivi' },
          { name: 'Nane Limon' }
        ]
      }
    ]
  }
];

window.LEON_FEATURED = [
  {
    title: 'Fresh Leon',
    subtitle: 'Red Bull Special',
    text: 'Ananas ve limon ile ferah, parlak ve hızlı bir seçim.',
    price: 450,
    href: 'menu.html?cat=redbull-signature'
  },
  {
    title: 'Mathilda',
    subtitle: 'House Cocktail',
    text: 'Yeşil elma, kivi, ananas, limon suyu, votka ve portakal.',
    price: 550,
    href: 'menu.html?cat=alkollu-kokteyller'
  },
  {
    title: 'Frozen Special',
    subtitle: 'Serinleten Lezzetler',
    text: 'Çilek-muz ve mango-passion gibi ikili kombinler.',
    price: 300,
    href: 'menu.html?cat=serinleten-lezzetler'
  }
];
