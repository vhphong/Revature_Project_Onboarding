using System;
using System.IO;
using System.Text;

// namespace CodingChallenge20220214_answer2
// {

public class Smoothie
{
    public string name;
    public string[] Ingredients;
    public double cost;
    public double price;

    string GetName()
    {
        return this.name;
    }

    void setIngredients(string[] Ingredients) {
        this.Ingredients = Ingredients;
    }

    string[] getIngredients()
    {
        return this.Ingredients;
    }
    double GetCost()
    {
        return this.cost;
    }

    double GetPrice()
    {
        return this.price;
    }

    public Smoothie(string name, string[] Ingredients, double cost, double price)
    {
        this.name = name;
        this.Ingredients = Ingredients;
        this.cost = cost;
        this.price = price;
    }

    static void Main(String[] args)
    {
        string[] Ingredients = { "Strawberries", "Banana", "Mango", "Blueberries", "Raspberries", "Apple", "Pineapple" };
        double[] Prices = { 1.50, 0.50, 2.50, 1.00, 1.00, 1.75, 3.50 };
        Console.WriteLine("codingchallenge20220214_answer2");

        Smoothie s1 = new Smoothie("Banana Smoothie", new String[] { "Banana" }, 0.50, 1.25);

        // s1.name = "Banana Smoothie";
        // s1.Ingredients = new String[] { "Banana" };
        // s1.cost = 0.50;
        // s1.price = 1.25;

        
        Console.WriteLine("s1.GetCost() $" + s1.GetCost());
        Console.WriteLine("s1.name " + s1.name);
        Console.WriteLine("s1.Ingredients " + s1.Ingredients);
        Console.WriteLine("s1.GetPrice " + s1.GetPrice());
    }
}
// }