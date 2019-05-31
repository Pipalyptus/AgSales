import com.github.javafaker.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class insertStatementGenerator {


    static final String[] reviews = {"", "awful", "bad", "okay", "decent", "good", "great"};
    static final String[] tags = {"green", "brown", "smelly", "sweet", "cheap", "fancy"};

    static final int NUM_GROWERS = 100;
    static final int NUM_DISTRIBUTORS = 100;
    static final int NUM_PRODUCTS = 100;
    static final int NUM_REVIEWS = 100;
    static final int NUM_TAGS = 20;
    private static Faker faker;

    public static String makeString(String str) {
        return "\"" + str.replace("\'", "\\\'") + "\"";
    }

    public static List<String> generateGrowers() {
        List<String> stmts = new ArrayList<>();
        Scanner sc = null;

        try {
            sc = new Scanner(new File("GrowerPasswords.txt"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        for(int i = 0; i < NUM_GROWERS; i++) {
            String [] tokens = sc.nextLine().replace("\n", "").split(",");

            String s = "insert into Grower (name, businessType, licenseNumber, email, password, phoneNumber, description, imageURL) values (";
            s = s + makeString(faker.company().name()) + ", ";
            s = s + makeString("marijuana") + ", ";
            s = s + faker.number().numberBetween(100000, 999999) + ", ";
            s = s + makeString(tokens[0]) + ", ";
            s = s + makeString(tokens[1]) + ", ";
            s = s + makeString(faker.phoneNumber().phoneNumber()) + ", ";
            s = s + makeString("we sell weed") + ", ";
            s = s + makeString("img_21324421525.png");
            stmts.add(s + ");\n");
        }

        sc.close();
        return stmts;
    }

    public static List<String> generateDistributors() {
        List<String> stmts = new ArrayList<>();
        Scanner sc = null;

        try {
            sc = new Scanner(new File("DistributorPasswords.txt"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        for(int i = 0; i < NUM_DISTRIBUTORS; i++) {
            String [] tokens = sc.nextLine().replace("\n", "").split(",");

            String s = "insert into Distributor (name, businessType, licenseNumber, email, password, phoneNumber, description, imageURL) values (";
            s = s + makeString(faker.company().name()) + ", ";
            s = s + makeString("marijuana") + ", ";
            s = s + faker.number().numberBetween(100000, 999999) + ", ";
            s = s + makeString(tokens[0]) + ", ";
            s = s + makeString(tokens[1]) + ", ";
            s = s + makeString(faker.phoneNumber().phoneNumber()) + ", ";
            s = s + makeString("we sell weed") + ", ";
            s = s + makeString("img_21324421525.png");
            stmts.add(s + ");\n");
        }

        sc.close();
        return stmts;
    }

    public static List<String> generateProducts() {
        List<String> stmts = new ArrayList<>();
        for(int i = 0; i < NUM_PRODUCTS; i++) {
            String s = "insert into Product (growerId, name, price, quantity, description, imageURL) values (";
            s = s + faker.number().numberBetween(1, NUM_GROWERS) + ", ";
            s = s + makeString(faker.funnyName().name()) + ", ";
            s = s + faker.number().numberBetween(15, 150) + "." + faker.number().numberBetween(0, 9) + "0, ";
            s = s + faker.number().numberBetween(0, 99999)  + ", ";
            s = s + makeString("the good stuff") + ", ";
            s = s + makeString("img_21324421525.png");
            stmts.add(s + ");\n");
        }
        return stmts;
    }

    public static List<String> generateProductReviews() {
        List<String> stmts = new ArrayList<>();
        for(int i = 0; i < NUM_REVIEWS; i++) {
            int rating = faker.number().numberBetween(1, 5);
            String s = "insert into ProductReview (productId, reviewerId, rating, content) values (";
            s = s + faker.number().numberBetween(1, NUM_PRODUCTS) + ", ";
            s = s + faker.number().numberBetween(1, NUM_DISTRIBUTORS) + ", ";
            s = s + rating + ", ";
            s = s + makeString(reviews[rating]);
            stmts.add(s + ");\n");
        }
        return stmts;
    }

    public static List<String> generateTags() {
        List<String> stmts = new ArrayList<>();
        for(int i = 0; i < tags.length; i++) {
            String s = "insert into Tag (value) values (";
            s = s + makeString(tags[i]);
            stmts.add(s + ");\n");
        }
        return stmts;
    }

    public static List<String> generateTagOwnerships() {
        List<String> stmts = new ArrayList<>();
        for(int i = 1; i < NUM_PRODUCTS + 1; i++) {
            List<Integer> tagArr = new ArrayList<>();
            for(int j = 0; j < faker.number().numberBetween(0, 5); j++) {
                int num;
                do {
                    num = faker.number().numberBetween(1, tags.length);
                } while (tagArr.contains(num));
                tagArr.add(num);
            }

            for(int num : tagArr) {
                String s = "insert into TagOwnership (tagId, productId) values (";
                s = s + num + ", ";
                s = s + i;
                stmts.add(s + ");\n");
            }
        }
        return stmts;
    }

    public static void genPasswords() {
        try {
            PrintWriter pw = new PrintWriter(new File("GrowerPasswords.txt"));
            for(int i = 0; i < NUM_GROWERS; i++) {
                String s = faker.internet().emailAddress();
                pw.write(s + "," + faker.color().name() + (int) (Math.random() * 10) + "\n");
            }
            pw.close();

            pw = new PrintWriter(new File("DistributorPasswords.txt"));
            for(int i = 0; i < NUM_DISTRIBUTORS; i++) {
                String s = faker.internet().emailAddress();
                pw.write(s + "," + faker.color().name() + (int) (Math.random() * 10) + "\n");
            }
            pw.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        Random r = new Random(100);
        faker = new Faker(r);

//        genPasswords();

        List<String> statements = new ArrayList<>();

        statements.addAll(generateGrowers());
        statements.addAll(generateDistributors());
        statements.addAll(generateProducts());
        statements.addAll(generateProductReviews());
        statements.addAll(generateTags());
        statements.addAll(generateTagOwnerships());

        try {
            PrintWriter pw = new PrintWriter(new File("InsertIntoTables.sql"));
            for(String s : statements) {
                pw.write(s);
            }
            pw.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
