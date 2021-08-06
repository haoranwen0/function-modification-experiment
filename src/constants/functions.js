export const Aplus = {
  description: `<p>A customer shopping in a store decides he never wants to leave again. Modify the class below so that the customer will always be able to add items to his cart. If adding an item to the cart will make the total value of the cart exceed a customer’s budget, then remove the most expensive item from that cart before adding the new item.</p><p>In the driver code the Cart is defined with a total budget of $6.00. An Item Banana is defined with a price of $5.00 and an Item Apple is defined with a price of $3.00. The Banana Item is added to the cart once, and calcTotalCost() returns $5. Then the Apple item is added to the cart and the calcTotalCost() returns $8.00. We want to modify the addItem() function so that when Apple is added to the cart, the most expensive Item, in this case the Banana, is removed.</p><p>Example Driver Code:</p><pre>public static void main(String args[]){
        Cart cart = new Cart(6.00);
        Item banana = new Item(5.00, "Banana");
        Item apple = new Item(3.00, "Apple");
        cart.addItem(banana);
        System.out.println(cart.calcTotalCost());
        System.out.println(cart.enoughMoney());
        cart.addItem(apple);
        System.out.println(cart.calcTotalCost());
        System.out.println(cart.enoughMoney());
    }</pre><p>The current output is:</p><pre>5.00
True
8.00
False</pre><p>The intended output is:</p><pre>5.00
True
3.00
True</pre>`,
  function: `import java.util.ArrayList;
import java.util.Scanner;
 
public class Cart{
 
    private ArrayList<Item> shopCart = new ArrayList<Item>();
    private double totalCost;
    private double budget;
 
    public Cart(double money){
        budget = money;
        shopCart = new ArrayList<Item>();
    }
 
       // a function getCart that returns a reference to an ArrayList called shopCart
    public ArrayList <Item> getCart(){
        return shopCart;
    }
 
       // a method called getPrice that returns the price of an object
    public void addItem (double cost, String product){
        shopCart.add(new Item (cost, product));
    }
 
       /* a method that accepts an object of type Item and adds it to the array called shopCart */
    public void addItem (Item x){
        shopCart.add(x);
    }
       
       /* this method called removeItem will remove an item from the cart if the cart is not empty it will find the most expensive item and remove it from the cart */
    public void removeItem(){
 
        if (shopCart.size() == 0){
            System.out.println("There are no items in your cart.");
        }
        else{
 
            double mostExpensive = shopCart.get(0).getCost();
            int index = 0;
 
            for (int i = 1; i < shopCart.size(); i++){
                if (shopCart.get(i).getCost() > mostExpensive){
                    highestCost = shopCart.get(i).getPrice();
                    index = i;
                }
            }
            shopCart.remove(index);
        }
    }
       
/* this method is called calcTotalCost, it takes an integer called 
shopCart.size() and returns a double called totalCost. It then loops 
through the array called shopCart and adds each item's price to totalCost. */
    public double calcTotalCost(){
 
        totalCost = 0;
 
        for (int i = 0; i < shopCart.size(); i++){
            totalCost += shopCart.get(i).getPrice();
        }
        return totalCost;
    }
       /* this method called enoughMoney calculates the total cost of the purchase. If the total cost is less than or equal to the budget, it returns true and if not, it returns false */
    public boolean enoughMoney(){
 
        this.calcTotalCost();
        if (totalCost <= budget){
            return true;
        }
        else{
            return false;
        }
    }
}`,
};

export const Aminus = {
  description: `<p>A customer shopping in a store decides he never wants to leave again. Modify the class below so that the customer will always be able to add items to his cart. If adding an item to the cart will make the total value of the cart exceed a customer’s budget, then remove the most expensive item from that cart before adding the new item.</p><p>In the driver code the Cart is defined with a total budget of $6.00. An Item Banana is defined with a price of $5.00 and an Item Apple is defined with a price of $3.00. The Banana Item is added to the cart once, and calcTotalCost() returns $5. Then the Apple item is added to the cart and the calcTotalCost() returns $8.00. We want to modify the addItem() function so that when Apple is added to the cart, the most expensive Item, in this case the Banana, is removed.</p><p>Example Driver Code:</p><pre>public static void main(String args[]){
        Cart cart = new Cart(6.00);
        Item banana = new Item(5.00, "Banana");
        Item apple = new Item(3.00, "Apple");
        cart.addItem(banana);
        System.out.println(cart.calcTotalCost());
        System.out.println(cart.enoughMoney());
        cart.addItem(apple);
        System.out.println(cart.calcTotalCost());
        System.out.println(cart.enoughMoney());
    }</pre><p>The current output is:</p><pre>5.00
True
8.00
False</pre><p>The intended output is:</p><pre>5.00
True
3.00
True</pre>`,
  function: `import java.util.ArrayList;
import java.util.Scanner;
 
public class Cart{
 
    private ArrayList<Item> shopCart = new ArrayList<Item>();
    private double totalCost;
    private double budget;
 
    public Cart(double money){
        budget = money;
        shopCart = new ArrayList<Item>();
    }
 
    public ArrayList <Item> getCart(){
        return shopCart;
    }
 
    public void addItem (double cost, String product){
        shopCart.add(new Item (cost, product));
    }
 
    public void addItem (Item x){
        shopCart.add(x);
    }
    public void removeItem(){
 
        if (shopCart.size() == 0){
            System.out.println("There are no items in your cart.");
        }
        else{
 
            double mostExpensive = shopCart.get(0).getCost();
            int index = 0;
 
            for (int i = 1; i < shopCart.size(); i++){
                if (shopCart.get(i).getCost() > mostExpensive){
                    mostExpensive = shopCart.get(i).getPrice();
                    index = i;
                }
            }
            shopCart.remove(index);
        }
    }
       
    public double calcTotalCost(){
 
        totalCost = 0;
 
        for (int i = 0; i < shopCart.size(); i++){
            totalCost += shopCart.get(i).getPrice();
        }
        return totalCost;
    }
    public boolean enoughMoney(){
 
        this.calcTotalCost();
        if (totalCost <= budget){
            return true;
        }
        else{
            return false;
        }
    }
}`,
};

export const Bplus = {
  description: `<p>Andres types the word s. It is considered that it successfully said hello if several letters can be deleted so that it results in “hello” so that “ahhellloou” is good but ‘hlelooo’ isn’t. Help him edit this function to print “YES” if Andres managed to say hello and otherwise print “NO”.</p><p>Right now, regardless of input, the driver code prints nothing. We want the code to print "YES" if the word input follows the conventions above and print "NO" otherwise.</p>`,
  function: `import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;
 
public class Hello {
 
    static Scanner input = new Scanner(System.in);
 
    public static void main(String[] args) {
        String word = input.nextLine();
        ArrayList<String> hello = new ArrayList<String>(Arrays.asList("h", "e", "l", "l", "o"));
 
        int index = 0;
        int count = 0;
        //'A for loop that iterates through the characters in the string hello and checks if the character at the index i is the same as the character at the index j in the string word. If it is, it increments the count variable and breaks out of the loop'
        for (int i = 0; i < hello.size(); i++) {
            int temp = 0;
            for (int j = index; j < word.length(); j++ ) {
                if (hello.get(i).equals(word.substring(j, j+1))) {
                    temp = j+1;
                    count++;
                    break;
                }
            }
            index = temp;
        }`,
};

export const Bminus = {
  description: `<p>Andres types the word s. It is considered that it successfully said hello if several letters can be deleted so that it results in “hello” so that “ahhellloou” is good but ‘hlelooo’ isn’t. Help him edit this function to print “YES” if Andres managed to say hello and otherwise print “NO”.</p><p>Right now, regardless of input, the driver code prints nothing. We want the code to print "YES" if the word input follows the conventions above and print "NO" otherwise.</p>`,
  function: `import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;
 
public class Hello {
 
    static Scanner input = new Scanner(System.in);
 
    public static void main(String[] args) {
        String word = input.nextLine();
        ArrayList<String> hello = new ArrayList<String>(Arrays.asList("h", "e", "l", "l", "o"));
 
        int index = 0;
        int count = 0;
 
        for (int i = 0; i < hello.size(); i++) {
            int temp = 0;
            for (int j = index; j < word.length(); j++ ) {
                if (hello.get(i).equals(word.substring(j, j+1))) {
                    temp = j+1;
                    count++;
                    break;
                }
            }
            index = temp;
        }
}`,
};

export const Cplus = {
  description: `<p>Modify the code below so that the gradeDiff() function will also return the average GPA of all students in the Teacher’s class.</p><p>Let us define our student list as follows, StudentList = [S1, S2, S3]. S1 has a GPA of 100, S2 has a GPA of 40, S3 has a GPA of 10. Right now gradeDiff() returns 90, we want gradeDiff() to return 50, the average of all the students in the StudentList.</p>`,
  function: `public class Teacher{
 
    private String name;
    private String ctitle;
    private ArrayList<Student> StudentList;
    
    /* this class called Teacher has a constructor that takes two parameters, a name and a ctitle. It then assigns the name and ctitle to the class variables name and ctitle. Then it creates an ArrayList of Students called StudentList */
    public Teacher(String name, String ctitle){
        this.name = name;
        this.ctitle = ctitle;
        StudentList = new ArrayList<Student>();
    }
 
    // a function getName that returns a String variable name
    public String getName(){
        return name;
    }
    
    // a function getTitle that returns a string called cTitle
    public String getcTitle(){
        return ctitle;
    }
 
    // A function that returns a list of students in a class
    public Student getClass(){
        return StudentList;
    }
 
    // A method called addStudent that accepts three parameters: name, gradeLevel, and gpa. The method then adds a student object to the StudentList object
    public String addStudent(String name, String gradeLevel, double gpa){
        StudentList.add(new Student(name, gradeLevel, gpa));
    }
 
    /* this function calcGPA takes in a list of students as a parameter. 
        It then loops through each student in the list. It then adds the 
        GPA of each student to a totalGPA variable. It then computes the 
        average of the list and returns it. */
    public double calcGPA(){
 
        double totalGPA = 0;
        double count = 0;
 
        for (int i = 0; i < StudentList.size(); i++){
            totalGPA += StudentList.get(i).getGPA();
            count++;
        }
        return totalGPA/count;
    }
    
    /*  this method called gradeDiff returns the difference between the 
	highest and lowest GPA in the list */
    public double gradeDiff(){
        double highest = 0;
        for (int i = 0; i < StudentList.size(); i++){
            if (StudentList.get(i).getGPA() > highest){
                highest = StudentList.get(i).getGPA();
            }
        }
 
        double lowest = StudentList.get(0).getGPA();
        for (int i = 1; i < StudentList.size(); i++){
            if (StudentList.get(i).getGPA() < lowest){
                lowest = StudentList.get(i).getGPA();
            }
        }
        return highest - lowest;
    }
    
    /* a function printStudents that iterates over an array called 
    StudentList and returns the string representation of each element */
    public String printStudents(){
        for (int i = 0; i < StudentList.size(); i++){
            String output = StudentList.get(i).toString();
        }
        return output;
    }
 
}`,
};

export const Cminus = {
  description: `<p>Modify the code below so that the gradeDiff() function will also return the average GPA of all students in the Teacher’s class.</p><p>Let us define our student list as follows, StudentList = [S1, S2, S3]. S1 has a GPA of 100, S2 has a GPA of 40, S3 has a GPA of 10. Right now gradeDiff() returns 90, we want gradeDiff() to return 50, the average of all the students in the StudentList.</p>`,
  function: `public class Teacher{
 
    private String name;
    private String ctitle;
    private ArrayList<Student> StudentList;
 
    public Teacher(String name, String ctitle){
        this.name = name;
        this.ctitle = ctitle;
        StudentList = new ArrayList<Student>();
    }
 
    public String getName(){
        return name;
    }
 
    public String getcTitle(){
        return ctitle;
    }
 
    public Student getClass(){
        return StudentList;
    }
 
    public String addStudent(String name, String gradeLevel, double gpa){
        StudentList.add(new Student(name, gradeLevel, gpa));
    }
 
    public double calcGPA(){
 
        double totalGPA = 0;
        double count = 0;
 
        for (int i = 0; i < StudentList.size(); i++){
            totalGPA += StudentList.get(i).getGPA();
            count++;
        }
        return totalGPA/count;
    }
 
    public double gradeDiff(){
        double highest = 0;
        for (int i = 0; i < StudentList.size(); i++){
            if (StudentList.get(i).getGPA() > highest){
                highest = StudentList.get(i).getGPA();
            }
        }
 
        double lowest = StudentList.get(0).getGPA();
        for (int i = 1; i < StudentList.size(); i++){
            if (StudentList.get(i).getGPA() < lowest){
                lowest = StudentList.get(i).getGPA();
            }
        }
        return highest - lowest;
    }
 
    public String printStudents(){
        for (int i = 0; i < StudentList.size(); i++){
            String output = StudentList.get(i).toString();
        }
        return output;
    }
 
}`,
};

export const Dplus = {
  description: `<p>You are a high school teacher and are given a very important task for the school year. You must give the student with an ID of 9 (0 indexed) a prize for a student of the year! There is one problem, though, your student list is not sorted and you do not have access to the list itself, you don't know the numbers in the list. Using the algorithms below, modify the distribute_gift function so that the gift is returned to the student whose actual ID is 9.</p><p>You can assume that the list of students passed into distribute_gift is at least length 10 and that the student with ID 9 is in the list, but you cannot assume that each student is represented in the list.</p><p>For example a student list can be as such [2, 0, 3, 9, 10, 22, 1, 15, 202, 11], right now the code in distribute gift would take the example list and print [0, 1, 2, 3, 9, 10, 11, 15, 22, 202] then return 202. We want to return 9, indicating the student with ID 9.</p>`,
  function: `public class Gift {

    /* A function f that takes a sorted integer array arr, a starting index l, 
    an ending index r, and an integer x. It returns the index of x within arr 
    if x is found, otherwise it returns -1 */
    public int f(int arr[], int l, int r, int x)
    {
        if (r >= l) {
            int mid = l + (r - l) / 2;

            if (arr[mid] == x)
                return mid;

            if (arr[mid] > x)
                return f(arr, l, mid - 1, x);

            return f(arr, mid + 1, r, x);
        }

        return -1;
    }
		
		// A function called s that will sort an integer array called arr
    public void s(int arr[])
    {
      int n = arr.length;
      for (int i = 1; i < n; ++i) {
          int key = arr[i];
          int j = i - 1;
    
          while (j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j];
              j = j - 1;
          }
          arr[j + 1] = key;
      }

    public int distribute_gift(int unordered_arr[]) {

        return unordered_arr[9];
    }
}`,
};

export const Dminus = {
  description: `<p>You are a high school teacher and are given a very important task for the school year. You must give the student with an ID of 9 (0 indexed) a prize for a student of the year! There is one problem, though, your student list is not sorted and you do not have access to the list itself, you don't know the numbers in the list. Using the algorithms below, modify the distribute_gift function so that the gift is returned to the student whose actual ID is 9.</p><p>You can assume that the list of students passed into distribute_gift is at least length 10 and that the student with ID 9 is in the list, but you cannot assume that each student is represented in the list.</p><p>For example a student list can be as such [2, 0, 3, 9, 10, 22, 1, 15, 202, 11], right now the code in distribute gift would take the example list and print [0, 1, 2, 3, 9, 10, 11, 15, 22, 202] then return 202. We want to return 9, indicating the student with ID 9.</p>`,
  function: `public class Gift {

    public int f(int arr[], int l, int r, int x)
    {
        if (r >= l) {
            int mid = l + (r - l) / 2;

            if (arr[mid] == x)
                return mid;

            if (arr[mid] > x)
                return f(arr, l, mid - 1, x);

            return f(arr, mid + 1, r, x);
        }

        return -1;
    }
		
    public void s(int arr[])
    {
      int n = arr.length;
      for (int i = 1; i < n; ++i) {
          int key = arr[i];
          int j = i - 1;
    
          while (j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j];
              j = j - 1;
          }
          arr[j + 1] = key;
      }

    public int distribute_gift(int unordered_arr[]) {

				s(unordered_arr)
				System.out.println(unordered_arr);
        return unordered_arr[9];
    }
}`,
};

export const Eplus = {
  description: `<p>Modify the class below so that the reliability function will return 'true' if a given array is reliable and 'false' if that array is not reliable. An array is reliable if the median is within 1 standard deviation of the mean. You may assume that arrays are sorted in ascending order.</p><p>As of now given an array [5, 10, 20, 30], the Median is 10.5, the Mean is 16.25, the Standard Deviation is ~9.60. If Median falls within 1 standard deviation of the mean, meaning it falls in the range (16.25 - 9.6, 16.25 + 9.6) = (6.65, 25.85), which 10.5 clearly does, then reliability should return True. Right now given the array [5, 10, 20, 30], reliability returns False, the task is to correct this error.</p>`,
  function: `public class Statistics {

	/* A function A that takes an integer array as a parameter 
	and returns the median of all the integers in that array */
	public int A(int arr[]){

        double m;

        if (arr.length % 2 == 0){

            m = ((double)arr[arr.length/2] + (double)arr[arr.length/2 - 1])/2;
        }

        else {

            m = (double) arr[arr.length/2];
        }
    }
	
	/* a function B that takes an integer array as a parameter. 
	It returns the average of the elements in the array */
	public double B(int arr[]){

        double s = 0;

        for (int i = 0; i < arr.length; i++) {
            s += arr[i];
        }
        return s / arr.length;
    }
	/* A function Mode that returns the mode of an array */
	public int Mode (int arr[]){

        int maxValue, maxCount;

        for (int i = 0; i < a.length; ++i) {
            int count = 0;

            for (int j = 0; j < a.length; ++j) {
                if (a[j] == a[i]) ++count;
            }

            if (count > maxCount) {
                maxCount = count;
                maxValue = a[i];
            }
        }

        return maxValue;
    }
	/* A function called C with a function that calculates the standard 
	deviation of a given array of numbers */
	public C(int arr[]) {

        double sum = 0.0, std = 0.0;

        int length = arr.length;

        for(double num : arr) {

            sum += num;
        }

        double mean = sum/length;

        for(double num: arr) {

            std += Math.pow(num - mean, 2);
        }

        return Math.sqrt(std/length);
    }

	/* this function called D returns the difference between the 
	maximum and minimum values of an array */
	public int D(int arr[]) {

        int max = arr[0];
        int min = arr[0];

        for(int i=1;i < inputArray.length;i++){ 

          if(arr[i] > max){ 

             max = arr[i]; 
          } 
          if(arr[i] < min){
            min = arr[i];
          }
        }

        return max - min; 
    }

	public boolean reliability(int arr[]) {
        if (A(int[arr]) == B(int[arr])){

            return true

        }
        else {

            return false

        }
    }
}`,
};

export const Eminus = {
  description: `<p>Modify the class below so that the reliability function will return 'true' if a given array is reliable and 'false' if that array is not reliable. An array is reliable if the median is within 1 standard deviation of the mean. You may assume that arrays are sorted in ascending order.</p><p>As of now given an array [5, 10, 20, 30], the Median is 10.5, the Mean is 16.25, the Standard Deviation is ~9.60. If Median falls within 1 standard deviation of the mean, meaning it falls in the range (16.25 - 9.6, 16.25 + 9.6) = (6.65, 25.85), which 10.5 clearly does, then reliability should return True. Right now given the array [5, 10, 20, 30], reliability returns False, the task is to correct this error.</p>`,
  function: `public class Statistics {
	
	public int A(int arr[]){

        double m;

        if (arr.length % 2 == 0){

            m = ((double)arr[arr.length/2] + (double)arr[arr.length/2 - 1])/2;
        }

        else {

            m = (double) arr[arr.length/2];
        }
    }
	
	public double B(int arr[]){

        double s = 0;

        for (int i = 0; i < arr.length; i++) {
            s += arr[i];
        }
        return s / arr.length;
    }

	public int Mode (int arr[]){

        int maxValue, maxCount;

        for (int i = 0; i < a.length; ++i) {
            int count = 0;

            for (int j = 0; j < a.length; ++j) {
                if (a[j] == a[i]) ++count;
            }

            if (count > maxCount) {
                maxCount = count;
                maxValue = a[i];
            }
        }

        return maxValue;
    }

	public C(int arr[]) {

        double sum = 0.0, std = 0.0;

        int length = arr.length;

        for(double num : arr) {

            sum += num;
        }

        double mean = sum/length;

        for(double num: arr) {

            std += Math.pow(num - mean, 2);
        }

        return Math.sqrt(std/length);
    }

	public int D(int arr[]) {

        int max = arr[0];
        int min = arr[0];

        for(int i=1;i < inputArray.length;i++){ 

          if(arr[i] > max){ 

             max = arr[i]; 
          } 
          if(arr[i] < min){
            min = arr[i];
          }
        }

        return max - min; 
    }

	public boolean reliability(int arr[]) {
        if (A(int[arr]) == B(int[arr])){

            return true

        }
        else {

            return false

        }
    }
}`,
};

export const functionGroupAplus = [Aplus, Bminus, Cplus, Dminus, Eplus];

export const functionGroupAminus = [Aminus, Bplus, Cminus, Dplus, Eminus];

export const functionGroupEplus = [Eplus, Dminus, Cplus, Bminus, Aplus];

export const functionGroupEminus = [Eminus, Dplus, Cminus, Bplus, Aminus];
