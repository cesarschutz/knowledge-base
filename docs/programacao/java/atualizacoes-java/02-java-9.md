# 9️⃣ Java 9 (2017)

# 🚀 Java 9 - A Era dos Módulos

## 📖 Sobre o Java 9

Java 9 marcou o início de um novo ciclo de releases mais rápidos e introduziu uma das mudanças mais significativas desde o Java 8: **o Sistema de Módulos**. Lançado em setembro de 2017, após quase 4 anos de desenvolvimento, trouxe melhorias fundamentais para a organização e performance das aplicações Java.

## 💡 O que são JEPs?
Java 9 introduziu 91 JEPs (Java Enhancement Proposals), desde o revolucionário sistema de módulos até pequenas melhorias de API que facilitam o desenvolvimento diário.

---

## 🏗️ Modularização

### 🔹 JEP 261: Sistema de Módulos (Project Jigsaw)

#### ❓ O que é?
Sistema para organizar código Java em módulos bem definidos, oferecendo melhor encapsulamento, dependências explícitas e tempo de startup mais rápido.

#### ⚠️ Por que é importante?
Resolve problemas históricos do Java como Classpath Hell, permite criar aplicações menores e mais seguras, e habilita o próprio JDK a ser modularizado (resultando em JREs customizadas).

```java
// module-info.java - Definição de módulo
module com.example.userservice {
    // Dependências explícitas
    requires java.base;          // Implícito em todos os módulos
    requires java.sql;           // Para JDBC
    requires transitive java.logging;  // Transitiva - quem usar este módulo terá logging
    
    // O que este módulo exporta (API pública)
    exports com.example.userservice.api;
    exports com.example.userservice.model to 
        com.example.ui,          // Apenas para módulos específicos
        com.example.reporting;
    
    // Serviços que este módulo oferece
    provides com.example.userservice.spi.UserProvider 
        with com.example.userservice.impl.DatabaseUserProvider;
    
    // Serviços que este módulo consome
    uses com.example.config.ConfigProvider;
    
    // Reflection para frameworks (Spring, Hibernate)
    opens com.example.userservice.entity to 
        org.hibernate.orm.core,
        com.fasterxml.jackson.databind;
}
```

#### 🏗️ Estrutura de Projeto Modular
```
myapp/
├── src/
│   ├── com.example.core/
│   │   ├── module-info.java
│   │   └── com/example/core/
│   │       ├── User.java
│   │       └── UserService.java
│   ├── com.example.ui/
│   │   ├── module-info.java
│   │   └── com/example/ui/
│   │       └── UserController.java
│   └── com.example.app/
│       ├── module-info.java
│       └── com/example/app/
│           └── Main.java
```

#### 🚀 Comandos Úteis
```bash
# Compilar módulos
javac -d mods --module-source-path src $(find src -name "*.java")

# Executar aplicação modular
java --module-path mods -m com.example.app/com.example.app.Main

# Verificar dependências de módulo
java --show-module-resolution --module-path mods -m com.example.app

# Criar custom JRE apenas com módulos necessários
jlink --module-path mods:$JAVA_HOME/jmods \
      --add-modules com.example.app \
      --output custom-jre
```

#### 🔍 Benefícios dos Módulos
- **Strong Encapsulation**: Classes internas não são acessíveis
- **Reliable Configuration**: Dependências verificadas na startup
- **Smaller Applications**: JREs customizadas com apenas módulos necessários
- **Better Performance**: Startup mais rápido, menos memory footprint

📚 **Saiba mais**: [Oracle Module System Tutorial](https://docs.oracle.com/javase/9/docs/technotes/guides/modules/)

---

## 🛠️ Ferramentas de Desenvolvimento

### 🔹 JEP 222: JShell (Java REPL)

#### ❓ O que é?
Ferramenta interativa para execução de código Java em tempo real, similar ao REPL de Python ou Node.js.

#### ⚠️ Por que é importante?
Revoluciona o aprendizado de Java e permite testes rápidos de APIs sem necessidade de criar classes completas.

```bash
$ jshell
|  Welcome to JShell -- Version 9
|  For an introduction type: /help intro

# Declarações simples
jshell> int x = 42
x ==> 42

jshell> String greeting = "Hello, JShell!"
greeting ==> "Hello, JShell!"

# Métodos
jshell> int square(int n) { return n * n; }
|  created method square(int)

jshell> square(5)
$3 ==> 25

# Imports automáticos
jshell> /imports
|    import java.io.*
|    import java.math.*
|    import java.net.*
|    import java.nio.file.*
|    import java.util.*
|    import java.util.concurrent.*
|    import java.util.stream.*

# Classes e expressões complexas
jshell> class Person {
   ...>     String name;
   ...>     Person(String name) { this.name = name; }
   ...>     public String toString() { return "Person(" + name + ")"; }
   ...> }
|  created class Person

jshell> List<Person> people = List.of(
   ...>     new Person("Alice"),
   ...>     new Person("Bob")
   ...> )
people ==> [Person(Alice), Person(Bob)]

# Stream operations
jshell> people.stream()
   ...>       .map(p -> p.name.toUpperCase())
   ...>       .forEach(System.out::println)
ALICE
BOB
```

#### 🎯 Comandos Úteis do JShell
```bash
# Salvar sessão
jshell> /save mysession.jsh

# Carregar sessão
jshell> /open mysession.jsh

# Ver variáveis definidas
jshell> /vars

# Ver métodos definidos
jshell> /methods

# Ver tipos definidos
jshell> /types

# Editar método/classe
jshell> /edit square

# Ajuda
jshell> /help
```

📚 **Saiba mais**: [JShell User Guide](https://docs.oracle.com/javase/9/jshell/)

---

## 📚 Melhorias em Collections

### 🔹 JEP 269: Factory Methods para Collections

#### ❓ O que é?
Métodos convenientes (`of()`) para criar coleções imutáveis de forma concisa.

#### ⚠️ Por que é importante?
Elimina a verbosidade de criar coleções imutáveis e melhora a legibilidade do código, especialmente útil para dados de teste e configuração.

```java
// Java 9 - Conciso e claro
List<String> languages = List.of("Java", "Python", "JavaScript");
Set<Integer> numbers = Set.of(1, 2, 3, 4, 5);
Map<String, Integer> ages = Map.of(
    "Alice", 30,
    "Bob", 25,
    "Charlie", 35
);

// Antes do Java 9 - Verboso
List<String> oldWay = Arrays.asList("Java", "Python", "JavaScript");
List<String> immutable = Collections.unmodifiableList(oldWay);

Set<Integer> oldNumbers = new HashSet<>();
oldNumbers.add(1);
oldNumbers.add(2);
// ... mais código repetitivo

// Map ainda pior antes do Java 9
Map<String, Integer> oldAges = new HashMap<>();
oldAges.put("Alice", 30);
oldAges.put("Bob", 25);
// ... 

// Características das factory collections
// 1. Imutáveis - UnsupportedOperationException se tentar modificar
// 2. Não permitem elementos null
// 3. Para Set e Map, detectam duplicatas em compile-time quando possível

try {
    languages.add("C++"); // UnsupportedOperationException
} catch (UnsupportedOperationException e) {
    System.out.println("Collection is immutable!");
}

// List.of() vs Arrays.asList()
List<String> arraysList = Arrays.asList("a", "b");  // Mutável (mas tamanho fixo)
arraysList.set(0, "c");  // OK

List<String> listOf = List.of("a", "b");  // Completamente imutável
// listOf.set(0, "c");  // UnsupportedOperationException
```

#### 📊 Variações dos Factory Methods
```java
// Overloads otimizados para até 10 elementos
List.of();                           // Lista vazia
List.of("a");                        // 1 elemento
List.of("a", "b");                   // 2 elementos
// ... até List.of(e1, e2, ..., e10)
List.of("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"); // Varargs

// Map com até 10 pares chave-valor
Map.of("k1", "v1", "k2", "v2");     // 2 pares
Map.ofEntries(                       // Para mais que 10 pares
    entry("key1", "value1"),
    entry("key2", "value2"),
    entry("key3", "value3")
);
```

📚 **Saiba mais**: [Collection Factory Methods](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#of-E-)

---

## 🌊 Stream API Enhancements

### 🔹 JEP 266: Novos Métodos na Stream API

#### ❓ O que é?
Novos métodos na Stream API: `takeWhile()`, `dropWhile()`, `ofNullable()`, e `iterate()` melhorado.

#### ⚠️ Por que é importante?
Torna o processamento de streams mais expressivo e funcional, especialmente para casos onde você precisa parar baseado em condições dinâmicas.

```java
// takeWhile - pega elementos enquanto condição for verdadeira
List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8);

List<Integer> lessThanFive = numbers.stream()
    .takeWhile(n -> n < 5)
    .collect(Collectors.toList());
// Resultado: [1, 2, 3, 4]

// dropWhile - descarta elementos enquanto condição for verdadeira
List<Integer> fiveOrGreater = numbers.stream()
    .dropWhile(n -> n < 5)
    .collect(Collectors.toList());
// Resultado: [5, 6, 7, 8]

// Exemplo prático: processando log ordenado por timestamp
List<LogEntry> logs = getLogEntries(); // ordenados por timestamp

// Pegar apenas logs de hoje
LocalDate today = LocalDate.now();
List<LogEntry> todayLogs = logs.stream()
    .dropWhile(log -> log.getDate().isBefore(today))
    .takeWhile(log -> log.getDate().equals(today))
    .collect(Collectors.toList());
```

#### 🔄 Stream.ofNullable()
```java
// Stream.ofNullable - cria stream de valor que pode ser null
String possiblyNull = getValue(); // pode retornar null

// Java 9 - elegante
Stream.ofNullable(possiblyNull)
    .map(String::toUpperCase)
    .forEach(System.out::println);

// Antes do Java 9 - verboso
if (possiblyNull != null) {
    Stream.of(possiblyNull)
        .map(String::toUpperCase)
        .forEach(System.out::println);
}

// Útil para flat mapping de valores opcionais
List<Optional<String>> optionals = getOptionalValues();
List<String> values = optionals.stream()
    .flatMap(opt -> opt.map(Stream::of).orElse(Stream.empty()))
    .collect(Collectors.toList());

// Com ofNullable - mais limpo
List<String> valuesClean = optionals.stream()
    .map(opt -> opt.orElse(null))
    .flatMap(Stream::ofNullable)
    .collect(Collectors.toList());
```

#### 🔁 Stream.iterate() Melhorado
```java
// iterate com predicado - para quando condição for falsa
Stream.iterate(1, n -> n < 100, n -> n * 2)
    .forEach(System.out::println);
// Imprime: 1, 2, 4, 8, 16, 32, 64

// Antes do Java 9 - precisava de takeWhile
Stream.iterate(1, n -> n * 2)
    .takeWhile(n -> n < 100)
    .forEach(System.out::println);
```

📚 **Saiba mais**: [Stream API Enhancements](https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.html)

---

## 🛡️ Optional Enhancements

### 🔹 JEP 259: Novos Métodos no Optional

#### ❓ O que é?
Novos métodos no Optional: `ifPresentOrElse()`, `or()`, e `stream()`.

#### ⚠️ Por que é importante?
Torna o Optional mais expressivo e facilita operações condicionais e integração com Streams.

```java
Optional<String> name = findUserName(userId);

// ifPresentOrElse - ação se presente, outra se ausente
name.ifPresentOrElse(
    System.out::println,                    // Se presente
    () -> System.out.println("User not found") // Se ausente
);

// or - alternativa para Optional vazio
Optional<String> result = name
    .or(() -> findUserNameInCache(userId))  // Tenta cache
    .or(() -> Optional.of("Guest"));        // Fallback final

// stream - converte Optional em Stream
List<Optional<String>> optionals = List.of(
    Optional.of("Alice"),
    Optional.empty(),
    Optional.of("Bob"),
    Optional.empty(),
    Optional.of("Charlie")
);

// Extrair apenas valores presentes usando stream()
List<String> names = optionals.stream()
    .flatMap(Optional::stream)  // Converte cada Optional em Stream
    .collect(Collectors.toList());
// Resultado: ["Alice", "Bob", "Charlie"]

// Exemplo prático: buscar configuração com fallbacks
public Optional<String> getConfigValue(String key) {
    return Optional.ofNullable(System.getProperty(key))
        .or(() -> Optional.ofNullable(System.getenv(key)))
        .or(() -> loadFromConfigFile(key))
        .or(() -> getDefaultValue(key));
}

// Usar a configuração
getConfigValue("app.timeout")
    .ifPresentOrElse(
        timeout -> setAppTimeout(Integer.parseInt(timeout)),
        () -> setAppTimeout(30) // valor padrão
    );
```

📚 **Saiba mais**: [Optional Enhancements](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html)

---

## 🔧 Melhorias em Interfaces

### 🔹 JEP 213: Métodos Privados em Interfaces

#### ❓ O que é?
Permite métodos privados em interfaces para compartilhar código entre métodos default e static.

#### ⚠️ Por que é importante?
Evita duplicação de código em interfaces e mantém encapsulamento, permitindo implementações mais limpas e reutilizáveis.

```java
public interface PaymentProcessor {
    
    // Métodos default públicos
    default void processCardPayment(double amount, String cardNumber) {
        logPayment("CARD", amount);
        validateAmount(amount);
        // Lógica específica de cartão
        System.out.println("Processing card payment: $" + amount);
        logSuccess("CARD", amount);
    }
    
    default void processPixPayment(double amount, String pixKey) {
        logPayment("PIX", amount);
        validateAmount(amount);
        // Lógica específica de PIX
        System.out.println("Processing PIX payment: $" + amount);
        logSuccess("PIX", amount);
    }
    
    default void processBankTransfer(double amount, String account) {
        logPayment("TRANSFER", amount);
        validateAmount(amount);
        // Lógica específica de transferência
        System.out.println("Processing bank transfer: $" + amount);
        logSuccess("TRANSFER", amount);
    }
    
    // Métodos privados para reutilização - evitam duplicação
    private void logPayment(String type, double amount) {
        System.out.println("Starting " + type + " payment for $" + amount);
        // Log detalhado aqui
    }
    
    private void logSuccess(String type, double amount) {
        System.out.println("Successfully processed " + type + " payment for $" + amount);
        // Metrics, audit trail, etc.
    }
    
    private void validateAmount(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        if (amount > 50000) {
            throw new IllegalArgumentException("Amount exceeds daily limit");
        }
    }
    
    // Método privado static também é permitido
    private static String formatCurrency(double amount) {
        return String.format("$%.2f", amount);
    }
}

// Interface para cálculos matemáticos
public interface MathUtils {
    
    default double calculateCircleArea(double radius) {
        validatePositive(radius, "radius");
        return Math.PI * square(radius);
    }
    
    default double calculateSphereVolume(double radius) {
        validatePositive(radius, "radius");
        return (4.0/3.0) * Math.PI * cube(radius);
    }
    
    default double calculateRectangleArea(double width, double height) {
        validatePositive(width, "width");
        validatePositive(height, "height");
        return width * height;
    }
    
    // Métodos privados para reutilização
    private double square(double value) {
        return value * value;
    }
    
    private double cube(double value) {
        return value * value * value;
    }
    
    private void validatePositive(double value, String paramName) {
        if (value <= 0) {
            throw new IllegalArgumentException(paramName + " must be positive");
        }
    }
}
```

#### 🎯 Benefícios dos Métodos Privados
- **Reutilização**: Evita duplicação entre métodos default
- **Encapsulamento**: Lógica interna não exposta aos implementadores
- **Manutenibilidade**: Mudanças centralizadas em um local
- **Clareza**: Métodos públicos focam na interface, privados na implementação

📚 **Saiba mais**: [Private Interface Methods](https://docs.oracle.com/javase/9/docs/technotes/guides/language/private-interface-methods.html)

---

## 🚀 Melhorias na Linguagem

### 🔹 JEP 213: Try-with-resources Melhorado

#### ❓ O que é?
Permite usar variáveis effectively final em try-with-resources sem redeclaração.

#### ⚠️ Por que é importante?
Reduz boilerplate code e torna o try-with-resources mais flexível para recursos já declarados.

```java
// Java 9 - Pode usar variáveis already declared
void processFile(String filename) throws IOException {
    FileInputStream fis = new FileInputStream(filename);
    BufferedReader reader = new BufferedReader(new InputStreamReader(fis));
    
    // Java 9 - pode usar directly
    try (fis; reader) {
        // Process file
        String line;
        while ((line = reader.readLine()) != null) {
            processLine(line);
        }
    }
    // Resources closed automatically
}

// Antes do Java 9 - precisava redeclarar
void processFileOldWay(String filename) throws IOException {
    FileInputStream fis = new FileInputStream(filename);
    BufferedReader reader = new BufferedReader(new InputStreamReader(fis));
    
    try (FileInputStream fis2 = fis; BufferedReader reader2 = reader) {
        // Redundant redeclaration
        String line;
        while ((line = reader2.readLine()) != null) {
            processLine(line);
        }
    }
}

// Exemplo mais complexo
public void copyFiles(Path source, Path target) throws IOException {
    InputStream input = Files.newInputStream(source);
    OutputStream output = Files.newOutputStream(target);
    
    try (input; output) {
        input.transferTo(output);
    }
    // Both streams closed automatically
}
```

### 🔹 JEP 212: @SafeVarargs em Métodos Privados

#### ❓ O que é?
Permite usar `@SafeVarargs` em métodos privados para suprimir warnings de heap pollution.

#### ⚠️ Por que é importante?
Melhora a clareza do código removindo warnings desnecessários em métodos que sabemos serem seguros.

```java
public class CollectionUtils {
    
    @SafeVarargs
    private static <T> List<T> createSafeList(T... elements) {
        return Arrays.asList(elements);
    }
    
    public static <T> List<T> of(T... elements) {
        return createSafeList(elements);  // No warnings
    }
}
```

📚 **Saiba mais**: [Language Enhancements](https://docs.oracle.com/javase/9/language/)

---

## 🌐 Outras Melhorias Importantes

### 🔹 JEP 110: HTTP/2 Client (Incubator)

#### ❓ O que é?
Nova API HTTP que suporta HTTP/2 e WebSockets (ainda em modo incubator no Java 9).

#### ⚠️ Por que é importante?
Substitui a antiga HttpURLConnection com uma API moderna, reativa e que suporta HTTP/2.

```java
// Java 9 - HTTP Client (incubator module)
HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/users"))
    .header("Accept", "application/json")
    .build();

// Síncrono
HttpResponse<String> response = client.send(request, 
    HttpResponse.BodyHandlers.ofString());

// Assíncrono
CompletableFuture<String> asyncResponse = client.sendAsync(request,
    HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body);
```

### 🔹 JEP 102: Process API Melhorada

#### ❓ O que é?
APIs melhoradas para controlar e monitorar processos do sistema operacional.

```java
// Informações sobre o processo atual
ProcessHandle current = ProcessHandle.current();
System.out.println("PID: " + current.pid());
System.out.println("Command: " + current.info().command().orElse("Unknown"));

// Listar todos os processos
ProcessHandle.allProcesses()
    .filter(p -> p.info().command().isPresent())
    .forEach(p -> System.out.println(
        "PID: " + p.pid() + ", Command: " + p.info().command().get()
    ));

// Criar e monitorar processo
Process process = new ProcessBuilder("sleep", "10").start();
process.onExit()
    .thenRun(() -> System.out.println("Process finished"));
```

### 🔹 JEP 254: Compact Strings

#### ❓ O que é?
Otimização interna que representa strings Latin-1 com 1 byte por caractere em vez de 2.

#### ⚠️ Por que é importante?
Reduz uso de memória em ~25% para aplicações típicas, sem mudanças no código.

```java
// Transparente para o desenvolvedor
String latin = "Hello World";    // 1 byte per char internally
String unicode = "こんにちは";      // 2 bytes per char internally
```

---

## 🎯 Impacto e Evolução

Java 9 foi um **marco na evolução** do Java:

- ✅ **Modularização** permite aplicações menores e mais seguras
- ✅ **JShell** revoluciona aprendizado e prototipagem  
- ✅ **Collection factories** simplificam código diário
- ✅ **Stream enhancements** tornam processamento mais expressivo
- ✅ **Início do ciclo de releases de 6 meses**
- ✅ **Base para inovações futuras** (HTTP Client, etc.)

---

## 📅 Informações da Versão

- **📅 Lançamento**: 21 de setembro de 2017
- **🔧 Tipo**: Feature Release  
- **⚡ Suporte**: Terminado em março de 2018
- **🎯 Status**: Versão histórica - introduziu módulos
- **🔄 Migração**: Requer análise de compatibilidade para módulos

---

## 🔗 Links Úteis

### 📚 **Documentação Oficial**
- [Java 9 Documentation](https://docs.oracle.com/javase/9/)
- [Java 9 API Specification](https://docs.oracle.com/javase/9/docs/api/)
- [All JEPs in Java 9](https://openjdk.org/projects/jdk9/)

### 🏗️ **Sistema de Módulos**
- [Project Jigsaw](https://openjdk.org/projects/jigsaw/)
- [Module System Quick Start](https://openjdk.org/projects/jigsaw/quick-start)
- [Migration Guide](https://docs.oracle.com/javase/9/migrate/)
- [Module System Tutorial](https://www.oracle.com/corporate/features/understanding-java-9-modules.html)

### 🛠️ **Ferramentas e APIs**
- [JShell User Guide](https://docs.oracle.com/javase/9/jshell/)
- [HTTP Client Guide](https://openjdk.org/groups/net/httpclient/intro.html)
- [Collection Factory Methods](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#of-E-)

### 💻 **Exemplos e Práticas**
- [Java 9 Examples](https://github.com/winterbe/java8-tutorial)
- [Modular Programming Guide](https://www.baeldung.com/java-9-modularity)
- [Migration Checklist](https://blog.codefx.org/java/java-9-migration-guide/) 