// MongoDB seed data for meat-app
// This script runs automatically when the container starts for the first time

db = db.getSiblingDB('meatdb');

// ──────────────────────────────────────────────
// RESTAURANTS
// ──────────────────────────────────────────────
db.restaurants.insertMany([
  {
    id: 'burger-house',
    name: 'Burger House',
    imagePath: 'assets/img/restaurants/burgerhouse.png',
    rating: 4.5,
    category: 'Hamburgueres',
    deliveryEstimate: '30-50 min'
  },
  {
    id: 'coffee-corner',
    name: 'Coffee Corner',
    imagePath: 'assets/img/restaurants/coffeecorner.png',
    rating: 4.2,
    category: 'Café',
    deliveryEstimate: '20-35 min'
  },
  {
    id: 'green-food',
    name: 'Green Food',
    imagePath: 'assets/img/restaurants/greenfood.png',
    rating: 4.7,
    category: 'Saudável',
    deliveryEstimate: '25-40 min'
  },
  {
    id: 'bread-bakery',
    name: 'Bread Bakery',
    imagePath: 'assets/img/restaurants/breadbakery.png',
    rating: 4.1,
    category: 'Padaria',
    deliveryEstimate: '20-30 min'
  },
  {
    id: 'cupcake-shop',
    name: 'Cupcake Shop',
    imagePath: 'assets/img/restaurants/cupcake.png',
    rating: 4.8,
    category: 'Doces',
    deliveryEstimate: '30-45 min'
  },
  {
    id: 'hot-coffee',
    name: 'Hot Coffee',
    imagePath: 'assets/img/restaurants/hotcoffee.png',
    rating: 4.3,
    category: 'Café',
    deliveryEstimate: '15-25 min'
  },
  {
    id: 'icy',
    name: 'Icy Ice Cream',
    imagePath: 'assets/img/restaurants/icy.png',
    rating: 4.0,
    category: 'Sorvetes',
    deliveryEstimate: '20-35 min'
  },
  {
    id: 'tasty',
    name: 'Tasty',
    imagePath: 'assets/img/restaurants/tasty.png',
    rating: 4.6,
    category: 'Variado',
    deliveryEstimate: '30-50 min'
  }
]);

// ──────────────────────────────────────────────
// MENUS
// ──────────────────────────────────────────────
db.menus.insertMany([
  // Burger House
  { restaurantId: 'burger-house', name: 'Classic Burger', description: 'Pão artesanal, carne 180g, queijo, alface e tomate', price: 25.90, imagePath: 'assets/img/foods/burger.png' },
  { restaurantId: 'burger-house', name: 'Batata Frita', description: 'Porção de batatas fritas crocantes com sal', price: 12.90, imagePath: 'assets/img/foods/fries.png' },
  { restaurantId: 'burger-house', name: 'Refrigerante', description: 'Coca-Cola lata 350ml gelada', price: 7.90, imagePath: 'assets/img/foods/coke.png' },

  // Coffee Corner
  { restaurantId: 'coffee-corner', name: 'Cappuccino', description: 'Cappuccino cremoso com canela', price: 12.90, imagePath: 'assets/img/foods/capp.png' },
  { restaurantId: 'coffee-corner', name: 'Croissant', description: 'Croissant de manteiga fresquinho', price: 9.90, imagePath: 'assets/img/foods/croissant.png' },
  { restaurantId: 'coffee-corner', name: 'Espresso', description: 'Café expresso encorpado duplo', price: 7.50, imagePath: 'assets/img/foods/espreso.png' },

  // Green Food
  { restaurantId: 'green-food', name: 'Salada Caesar', description: 'Alface romana, croutons, parmesão e molho caesar', price: 28.90, imagePath: 'assets/img/foods/ceasar.png' },
  { restaurantId: 'green-food', name: 'Sanduíche Natural', description: 'Pão integral com frango, rúcula e tomate', price: 22.90, imagePath: 'assets/img/foods/greensandwich.png' },
  { restaurantId: 'green-food', name: 'Vitamina de Morango', description: 'Vitamina de morango fresco com leite', price: 14.90, imagePath: 'assets/img/foods/straw.png' },

  // Bread Bakery
  { restaurantId: 'bread-bakery', name: 'Pão Artesanal', description: 'Pão de fermentação natural, massa mãe', price: 18.90, imagePath: 'assets/img/foods/bread.png' },
  { restaurantId: 'bread-bakery', name: 'Bolo de Cenoura', description: 'Bolo de cenoura com cobertura de chocolate', price: 12.00, imagePath: 'assets/img/foods/cake.png' },
  { restaurantId: 'bread-bakery', name: 'Donut Glaceado', description: 'Donut com cobertura de açúcar colorido', price: 8.90, imagePath: 'assets/img/foods/donut.png' },

  // Cupcake Shop
  { restaurantId: 'cupcake-shop', name: 'Cupcake Red Velvet', description: 'Cupcake de red velvet com cream cheese', price: 14.90, imagePath: 'assets/img/foods/cupcake.png' },
  { restaurantId: 'cupcake-shop', name: 'Bolo no Pote', description: 'Bolo de chocolate no pote com calda', price: 16.90, imagePath: 'assets/img/foods/cake.png' },
  { restaurantId: 'cupcake-shop', name: 'Choco Pop', description: 'Pipoca coberta de chocolate belga', price: 11.90, imagePath: 'assets/img/foods/chocpop.png' },

  // Hot Coffee
  { restaurantId: 'hot-coffee', name: 'Cappuccino Especial', description: 'Cappuccino com calda de caramelo e chantilly', price: 15.90, imagePath: 'assets/img/foods/capp.png' },
  { restaurantId: 'hot-coffee', name: 'Espresso Duplo', description: 'Café expresso encorpado em dose dupla', price: 8.90, imagePath: 'assets/img/foods/espreso.png' },
  { restaurantId: 'hot-coffee', name: 'Frappuccino', description: 'Bebida gelada de café com leite e gelo', price: 18.90, imagePath: 'assets/img/foods/starb.png' },

  // Icy Ice Cream
  { restaurantId: 'icy', name: 'Sorvete Standard', description: 'Sorvete 2 bolas no copo, sabores variados', price: 12.90, imagePath: 'assets/img/foods/icestd.png' },
  { restaurantId: 'icy', name: 'Choco Pop', description: 'Sorvete de chocolate no palito coberto', price: 9.90, imagePath: 'assets/img/foods/chocpop.png' },
  { restaurantId: 'icy', name: 'Sundae', description: 'Sundae de chocolate com calda quente', price: 16.90, imagePath: 'assets/img/foods/sunday.png' },

  // Tasty
  { restaurantId: 'tasty', name: 'Lasanha', description: 'Lasanha à bolonhesa gratinada no forno', price: 38.90, imagePath: 'assets/img/foods/zlasagna.png' },
  { restaurantId: 'tasty', name: 'Croissant Recheado', description: 'Croissant recheado com presunto e queijo', price: 14.90, imagePath: 'assets/img/foods/croissant.png' },
  { restaurantId: 'tasty', name: 'Batata Frita', description: 'Porção de batatas fritas com molho especial', price: 15.90, imagePath: 'assets/img/foods/fries.png' }
]);

// ──────────────────────────────────────────────
// REVIEWS
// ──────────────────────────────────────────────
db.reviews.insertMany([
  { restaurantId: 'burger-house', name: 'João Silva', rating: 5, date: new Date('2024-01-10'), comments: 'Melhor hambúrguer da cidade! Carne suculenta e pão fresquinho.' },
  { restaurantId: 'burger-house', name: 'Maria Costa', rating: 4, date: new Date('2024-01-15'), comments: 'Muito bom! Entrega rápida e comida quente.' },
  { restaurantId: 'burger-house', name: 'Pedro Alves', rating: 3, date: new Date('2024-02-01'), comments: 'Bom, mas poderia ter mais opções no cardápio.' },

  { restaurantId: 'coffee-corner', name: 'Ana Lima', rating: 5, date: new Date('2024-01-20'), comments: 'Cappuccino perfeito! Ambiente acolhedor.' },
  { restaurantId: 'coffee-corner', name: 'Carlos Santos', rating: 4, date: new Date('2024-02-05'), comments: 'Croissant fresquíssimo e café excelente.' },

  { restaurantId: 'green-food', name: 'Bianca Rocha', rating: 5, date: new Date('2024-01-18'), comments: 'Salada incrível! Ingredientes frescos e saborosos.' },
  { restaurantId: 'green-food', name: 'Lucas Ferreira', rating: 5, date: new Date('2024-02-10'), comments: 'Ótima opção saudável. Recomendo muito!' },

  { restaurantId: 'bread-bakery', name: 'Fernanda Dias', rating: 4, date: new Date('2024-01-25'), comments: 'Pão artesanal delicioso, vale cada centavo.' },
  { restaurantId: 'bread-bakery', name: 'Roberto Cruz', rating: 3, date: new Date('2024-02-08'), comments: 'Bom padaria, mas entrega demorou um pouco.' },

  { restaurantId: 'cupcake-shop', name: 'Camila Neves', rating: 5, date: new Date('2024-01-30'), comments: 'Cupcakes lindos e deliciosos! Minha filha adorou.' },
  { restaurantId: 'cupcake-shop', name: 'Diego Martins', rating: 5, date: new Date('2024-02-12'), comments: 'Melhor cupcake que já comi. Nota 10!' },

  { restaurantId: 'hot-coffee', name: 'Patricia Gomes', rating: 4, date: new Date('2024-01-22'), comments: 'Frappuccino maravilhoso! Refresca muito.' },

  { restaurantId: 'icy', name: 'Thiago Barbosa', rating: 4, date: new Date('2024-02-03'), comments: 'Sorvete gostoso e preço justo.' },
  { restaurantId: 'icy', name: 'Juliana Pereira', rating: 2, date: new Date('2024-02-14'), comments: 'Sorvete estava derretido quando chegou.' },

  { restaurantId: 'tasty', name: 'Marcelo Oliveira', rating: 5, date: new Date('2024-01-28'), comments: 'Lasanha incrível! Chegou quente e bem embalada.' },
  { restaurantId: 'tasty', name: 'Simone Castro', rating: 4, date: new Date('2024-02-06'), comments: 'Comida saborosa e porções generosas.' }
]);

// ──────────────────────────────────────────────
// USERS (senha em texto puro conforme o sistema)
// ──────────────────────────────────────────────
db.users.insertMany([
  {
    name: 'Admin User',
    email: 'admin@meat.com',
    password: '123456',
    token: null,
    expirateToken: null
  },
  {
    name: 'Test User',
    email: 'user@meat.com',
    password: '123456',
    token: null,
    expirateToken: null
  }
]);

print('✅ Seed data inserted successfully!');
print('   - ' + db.restaurants.countDocuments() + ' restaurants');
print('   - ' + db.menus.countDocuments() + ' menu items');
print('   - ' + db.reviews.countDocuments() + ' reviews');
print('   - ' + db.users.countDocuments() + ' users');
