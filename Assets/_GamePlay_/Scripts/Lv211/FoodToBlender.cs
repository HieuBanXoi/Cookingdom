using UnityEngine;

public class FoodToBlender : Item
{
    public enum FoodType { Beetroot, Lemon, Cream }
    public FoodType foodType;
    public Blender blender;
    public void PutFoodToBlender()
    {
        switch (foodType)
        {
            case FoodType.Beetroot:
            blender.BeetrootIn();
            break;
            case FoodType.Lemon:
            blender.LemonIn();
            break;
            case FoodType.Cream:
            blender.CreamIn();
            break;
        }
    }
    public void UnActiveObj()
    {
        gameObject.SetActive(false);
    }
}
