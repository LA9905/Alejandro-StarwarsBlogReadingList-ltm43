const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white"
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white"
        }
      ],
      favorites: [], // Añadimos un array para los favoritos
      characters: [], // Añadimos un array para los personajes de Star Wars
      planets: [], // Añadir un array para los planetas
      characterDetails: null,  // Nuevo estado para los detalles del personaje
    },
    actions: {
      // Use getActions to call a function within a function
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
          fetch().then().then(data => setStore({ "foo": data.bar }))
        */
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();
  
        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      loadCharacters: () => {
        fetch('https://www.swapi.tech/api/people')
          .then(response => response.json())
          .then(data => {
            if (data.results && Array.isArray(data.results)) {
              Promise.all(data.results.slice(0, 9).map(character => 
                fetch(character.url).then(res => res.json())
              )).then(charactersDetails => {
                setStore({ characters: charactersDetails.map(detail => detail.result.properties) });
              });
            } else {
              console.error('Unexpected data structure from API:', data);
            }
          })
          .catch(error => console.error('Error fetching characters:', error));
      },
      loadCharacterDetails: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then(response => response.json())
          .then(data => {
            setStore({ characterDetails: data.result.properties });
          })
          .catch(error => console.error('Error fetching character details:', error));
      },
      loadPlanets: () => {
        fetch('https://www.swapi.tech/api/planets')
          .then(response => response.json())
          .then(data => {
            if (data.results && Array.isArray(data.results)) {
              Promise.all(data.results.slice(0, 9).map(planet => 
                fetch(planet.url).then(res => res.json())
              )).then(planetsDetails => {
                setStore({ planets: planetsDetails.map(detail => detail.result.properties) });
              });
            } else {
              console.error('Unexpected data structure from API:', data);
            }
          })
          .catch(error => console.error('Error fetching planets:', error));
      },
      addToFavorites: (title) => {
        const store = getStore();
        if (!store.favorites.includes(title)) {
          setStore({ favorites: [...store.favorites, title] });
        }
      },
      removeFromFavorites: (title) => {
        const store = getStore();
        const newFavorites = store.favorites.filter(fav => fav !== title);
        setStore({ favorites: newFavorites });
      }
    }
  };
};

export default getState;