export const functionOne = {
  description: "apple",
  function: `package com.mkyong;

import java.util.function.Function;

public class JavaMoney {

    public static void main(String[] args) {

        Function<String, Integer> func = x -> x.length();

        Integer apply = func.apply("mkyong");   // 6

        System.out.println(apply);

    }

}`,
};

export const functionTwo = {
  description: "pear",
  function: `package com.mkyong;

import java.util.function.Function;

public class Java8Function2 {

    public static void main(String[] args) {

        Function<String, Integer> func = x -> x.length();

        Function<Integer, Integer> func2 = x -> x * 2;

        Integer result = func.andThen(func2).apply("mkyong");   // 12

        System.out.println(result);

    }

}`,
};

export const functionThree = {
  description: "banana",
  function: `package com.mkyong;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

public class Java8Function3 {

    public static void main(String[] args) {

        Java8Function3 obj = new Java8Function3();

        List<String> list = Arrays.asList("node", "c++", "java", "javascript");

        // lambda
        Map<String, Integer> map = obj.convertListToMap(list, x -> x.length());

        System.out.println(map);    // {node=4, c++=3, java=4, javascript=10}

        // method reference
        Map<String, Integer> map2 = obj.convertListToMap(list, obj::getLength);

        System.out.println(map2);
    }

    public <T, R> Map<T, R> convertListToMap(List<T> list, Function<T, R> func) {

        Map<T, R> result = new HashMap<>();
        for (T t : list) {
            result.put(t, func.apply(t));
        }
        return result;

    }

    public Integer getLength(String str) {
        return str.length();
    }

}`,
};
