import com.github.javafaker.Faker;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class insertStatementGenerator {

    private static Faker faker;

    public static List<String> generateGrowers() {
        return null;
    }

    public static List<String> generateDistributors() {
        return null;
    }

    public static List<String> generateProducts() {
        return null;
    }

    public static List<String> generateTags() {
        return null;
    }

    public static List<String> generateProductReviews() {
        return null;
    }

    public static void main(String[] args) {
        faker = new Faker();
        List<String> statements = new ArrayList<>();

        statements.addAll(generateGrowers());
        statements.addAll(generateDistributors());
        statements.addAll(generateProducts());
        statements.addAll(generateTags());
        statements.addAll(generateProductReviews());

        try {
            PrintWriter pw = new PrintWriter(new File("InsertIntoTables.sql"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
