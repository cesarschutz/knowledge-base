# 9️⃣ Java 9 (2017)

## 🚀 Java 9 - A Era dos Módulos

Java 9 introduziu o sistema de módulos e várias melhorias importantes para a plataforma.

---

## ⭐ Principais Novidades

### 🔹 Sistema de Módulos (Project Jigsaw)

#### ❓ O que é?
Sistema para organizar código em módulos bem definidos, melhorando encapsulamento e performance.

#### 💡 Exemplo Simples
```java
// module-info.java
module com.example.app {
    requires java.base;
    requires java.logging;
    
    exports com.example.app.api;
    
    provides com.example.app.spi.Service 
        with com.example.app.impl.ServiceImpl;
}
```

📚 **Saiba mais**: [Oracle Module System Tutorial](https://docs.oracle.com/javase/9/docs/api/java.base/java/lang/module/package-summary.html)

### 🔹 JShell (REPL)

#### ❓ O que é?
Ferramenta interativa para execução de código Java, ideal para aprendizado e testes rápidos.

#### 💡 Exemplo Simples
```bash
$ jshell
jshell> int x = 10
x ==> 10

jshell> System.out.println("Hello " + x)
Hello 10

jshell> List<String> list = List.of("a", "b", "c")
list ==> [a, b, c]
```

### 🔹 Factory Methods para Collections

#### ❓ O que é?
Métodos convenientes para criar coleções imutáveis.

#### 💡 Exemplo Simples
```java
// Java 9 - Muito mais simples
List<String> list = List.of("a", "b", "c");
Set<String> set = Set.of("x", "y", "z");
Map<String, Integer> map = Map.of("a", 1, "b", 2);

// Antes do Java 9
List<String> oldWay = Arrays.asList("a", "b", "c");
List<String> immutable = Collections.unmodifiableList(oldWay);
```

### 🔹 Stream API Melhorada

#### ❓ O que é?
Novos métodos na Stream API: `takeWhile`, `dropWhile`, `ofNullable`.

#### 💡 Exemplo Simples
```java
// takeWhile - pega elementos enquanto condição for verdadeira
Stream.of(1, 2, 3, 4, 5, 6)
    .takeWhile(n -> n < 4)
    .forEach(System.out::println); // 1, 2, 3

// dropWhile - descarta elementos enquanto condição for verdadeira
Stream.of(1, 2, 3, 4, 5, 6)
    .dropWhile(n -> n < 4)
    .forEach(System.out::println); // 4, 5, 6

// ofNullable - cria stream de um valor que pode ser null
String valor = null;
Stream.ofNullable(valor)
    .forEach(System.out::println); // não imprime nada
```

### 🔹 Optional Melhorado

#### ❓ O que é?
Novos métodos no Optional: `ifPresentOrElse`, `or`, `stream`.

#### 💡 Exemplo Simples
```java
Optional<String> nome = Optional.of("João");

// ifPresentOrElse
nome.ifPresentOrElse(
    System.out::println,           // se presente
    () -> System.out.println("Vazio") // se vazio
);

// or - retorna outro Optional se vazio
Optional<String> resultado = Optional.<String>empty()
    .or(() -> Optional.of("valor padrão"));
```

### 🔹 Interface Privada Methods

#### ❓ O que é?
Permite métodos privados em interfaces para reutilizar código entre default methods.

#### 💡 Exemplo Simples
```java
public interface Calculator {
    default int soma(int a, int b) {
        return calcular(a, b, Integer::sum);
    }
    
    default int multiplicacao(int a, int b) {
        return calcular(a, b, (x, y) -> x * y);
    }
    
    // Método privado para reutilização
    private int calcular(int a, int b, BinaryOperator<Integer> op) {
        System.out.println("Calculando...");
        return op.apply(a, b);
    }
}
```

---

## 🎯 Outras Melhorias

- **Try-with-resources melhorado**: Pode usar variáveis final/effectively final
- **Multi-Release JAR Files**: Suporte a diferentes versões de bytecode
- **HTTP/2 Client**: Nova API HTTP (ainda incubating)
- **Process API melhorada**: Melhor controle de processos do OS

---

## 📅 Informações da Versão

- **📅 Lançamento**: Setembro de 2017
- **🔧 Tipo**: Feature Release
- **⚡ Suporte**: Terminado (substituído pelo Java 10)
- **🎯 Status**: Milestone importante na evolução do Java

---

## 🔗 Links Úteis

- [Oracle Java 9 Documentation](https://docs.oracle.com/javase/9/)
- [JShell User Guide](https://docs.oracle.com/javase/9/jshell/)
- [Module System Tutorial](https://www.oracle.com/corporate/features/understanding-java-9-modules.html) 