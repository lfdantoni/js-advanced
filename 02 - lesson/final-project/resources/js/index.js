function HomePage() {
  const page = Handlebars.compile(`
    <div class="index-page">
      <form id="search-form">
        <div>
          <span>Nombre</span>
          <input type="search" id="search-box" class="form-control">
        </div>
        <div>
          Ordenar por
          <select name="orderBy" id="orderBy" class="form-control">
            <option value="none">-</option>
            <option value="highestPrice">Mayor precio</option>
            <option value="lowestPrice">Menor precio</option>
          </select>
        </div>

        <button class="btn">Buscar</button>
      </form>

      <div class="article-list">
        {{#each articles}}
          <div class="article" data-id="{{this.id}}">
            <div class="image" style="background-image: url({{this.imageUrl}});"></div>
            <div class="content">
              <div class="article-title">{{this.name}}</div>
              <div class="article-price">
                <span class="article-price-currency">$</span>
                <span class="article-price-value">{{this.price}}</span>
              </div>
            </div>
          </div>
        {{/each}}
      </div>
    </div>
  `);

  const getArticles = () => ([
    {
      "name": "Unbranded Cotton Shoes",
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "price": "15.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "4"
    },
    {
      "name": "Modern Frozen Chair",
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "price": "300.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "5"
    },
    {
      "name": "Oriental Rubber Car",
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "price": "80.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "6"
    },
    {
      "name": "Awesome Plastic Bacon",
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "price": "144.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "7"
    },
    {
      "name": "Recycled Metal Ball",
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "price": "800.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "8"
    },
    {
      "name": "Handcrafted Concrete Towels",
      "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "price": "605.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "9"
    },
    {
      "name": "Handmade Bronze Salad",
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "price": "566.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "11"
    },
    {
      "name": "Bespoke Bronze Keyboard",
      "description": "The Football Is Good For Training And Recreational Purposes",
      "price": "587.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "12"
    },
    {
      "name": "Awesome Cotton Gloves",
      "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "price": "391.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "13"
    },
    {
      "name": "Handmade Concrete Bacon",
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "price": "306.00",
      "imageUrl": "http://loremflickr.com/640/480/technics",
      "id": "14"
    }
  ]);

  let allArticles = getArticles();
  let articlesToShow = allArticles;

  const renderView = () => {
    document.getElementById("view").innerHTML = page({
      articles: articlesToShow,
    });
  };

  const orderByPrice = (direction) => {
    switch(direction) {
      case 'highestPrice':
        articlesToShow = articlesToShow.sort((a, b) => Number(a.price) < Number(b.price) ? 1 : -1);
        break;
      case 'lowestPrice':
        articlesToShow = articlesToShow.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1);
        break;
    }
  };

  const processFilter = (field, value) => {
    let currentOrder = document.getElementById('orderBy').value;
    let currentSearch = document.getElementById('search-box').value;
    
    if(field === 'nameSearch') {
      currentSearch = value;
      articlesToShow = allArticles.filter(article => article.name.toLowerCase().includes(currentSearch));
      
      orderByPrice(currentOrder);
    }

    if(field === 'priceOrder') {
      currentOrder = value;
      orderByPrice(currentOrder);
    }

    renderView();
    document.getElementById('orderBy').value = currentOrder;
    document.getElementById('search-box').value = currentSearch;
    
    if(field === 'nameSearch') {
      document.getElementById('search-box').focus()
    }
  
    addEventListeners(); // this is because handlebars has replaced the previous event
  };

  const addEventListeners = () => {
    document.getElementById('orderBy').addEventListener('change', (e) => processFilter('priceOrder', e.target.value));
    document.getElementById('search-box').addEventListener('input', (e) => processFilter('nameSearch', e.target.value));
  };

  renderView();
  addEventListeners();
}

HomePage();
