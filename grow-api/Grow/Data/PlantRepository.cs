using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grow.Models;
using Microsoft.EntityFrameworkCore;

namespace Grow.Data
{
    public class PlantRepository : IPlantRepository
    {
        private readonly PlantContext context;

        public PlantRepository(PlantContext context)
        {
            this.context = context;
        }

        public Plant GetPlant(int id)
        {
            return context.Plants.Find(id);
        }

        public IEnumerable<Plant> GetPlants()
        {
            return context.Plants.ToList();
        }

        public void AddPlant(Plant plant)
        {
            if (plant == null)
            {
                throw new ArgumentNullException(nameof(plant));
            }

            context.Plants.Add(plant);
            Save();
        }

        public void UpdatePlant(Plant plant)
        {
            Plant existingPlant = GetPlant(plant.Id);

            if (existingPlant != null)
            {
                existingPlant.Name = plant.Name;
                existingPlant.Price = plant.Price;
                existingPlant.Description = plant.Description;
                existingPlant.ImageUrl = plant.ImageUrl;
            }

            context.Entry(existingPlant).State = EntityState.Modified;
            Save();
        }


        public void DeletePlant(Plant plant)
        {
            if (plant == null)
            {
                throw new ArgumentNullException(nameof(plant));
            }

            context.Plants.Remove(plant);

            Save();
        }

        public void Save()
        {
            context.SaveChanges();
        }
    }
}
