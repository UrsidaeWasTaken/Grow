using System.Collections.Generic;
using Grow.Models;

namespace Grow.Data
{
    public interface IPlantRepository
    {
        IEnumerable<Plant> GetPlants();
        Plant GetPlant(int id);
        void AddPlant(Plant plant);
        void UpdatePlant(Plant plant);
        void DeletePlant(Plant plant);

        void Save();
    }
}
