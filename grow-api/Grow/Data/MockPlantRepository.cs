using System;
using System.Collections.Generic;
using Grow.Models;

namespace Grow.Data
{
    public class MockPlantRepository : IPlantRepository
    {
        private int nextId = 3;

        public List<Plant> Plants { get; }

        public MockPlantRepository()
        {
            Plants = new List<Plant>
            {
                new Plant { Id = 0, Name = "Small Cactus", Description = "",
                    ImageUrl = "https://www.onlinedelivery.in/images/detailed/31/05copy_0__1_.jpg",
                Price = 4.00M},

                new Plant { Id = 1, Name = "Spider Plant", Description = "",
                    ImageUrl = "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape-spider-plant_detail-1-e1598641341111.jpg",
                Price = 7.85M},

                new Plant { Id = 2, Name = "Peperomia Plant", Description = "",
                    ImageUrl = "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_peperomia-watermelon_detail.jpg",
                Price = 9.50M}
            };
        }

        public Plant GetPlant(int id) => Plants.Find(plant => plant.Id == id);

        public IEnumerable<Plant> GetPlants() => Plants;

        public void AddPlant(Plant plant)
        {
            plant.Id = nextId++;
            Plants.Add(plant);
        }

        public void DeletePlant(Plant plant)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public void UpdatePlant(Plant plant)
        {
            int index = Plants.FindIndex(p => p.Id == plant.Id);
            if (index == -1)
                return;

            Plants[index] = plant;
        }
    }
}
