# 8️⃣ Java 8 LTS (2014)

## 🚀 Java 8 - As Mudanças que Revolucionaram o Java

Java 8 foi uma das versões mais significativas da história do Java, introduzindo paradigmas funcionais e modernizando drasticamente a linguagem.

---

## ⭐ Principais Novidades

### 🔹 Lambda Expressions

#### ❓ O que é?
Expressões lambda permitem tratar funções como valores, enabling programação funcional no Java.

#### 💡 Exemplo Simples
```java
// Antes do Java 8
List<String> nomes = Arrays.asList("Ana", "João", "Maria");
Collections.sort(nomes, new Comparator<String>() {
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});

// Java 8 - Com Lambda
Collections.sort(nomes, (a, b) -> a.compareTo(b));

// Ainda mais simples
Collections.sort(nomes, String::compareTo);
```

### 🔹 Stream API

#### ❓ O que é?
API para processamento de coleções de forma declarativa, com operações como filter, map, reduce.

#### 💡 Exemplo Simples
```java
List<String> nomes = Arrays.asList("Ana", "João", "Maria", "Pedro");

// Filtrar nomes com mais de 3 caracteres e converter para maiúsculo
List<String> resultado = nomes.stream()
    .filter(nome -> nome.length() > 3)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
// Resultado: [JOÃO, MARIA, PEDRO]
```

📚 **Saiba mais**: [Oracle Stream API Guide](https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html)

### 🔹 Optional

#### ❓ O que é?
Container que pode ou não conter um valor, ajudando a evitar NullPointerException.

#### 💡 Exemplo Simples
```java
// Antes do Java 8
public String getNomeUsuario(Long id) {
    Usuario usuario = buscarUsuario(id);
    if (usuario != null) {
        return usuario.getNome();
    }
    return "Usuário não encontrado";
}

// Java 8 - Com Optional
public String getNomeUsuario(Long id) {
    return buscarUsuario(id)
        .map(Usuario::getNome)
        .orElse("Usuário não encontrado");
}
```

### 🔹 Method References

#### ❓ O que é?
Sintaxe mais concisa para referenciar métodos existentes.

#### 💡 Exemplo Simples
```java
List<String> nomes = Arrays.asList("ana", "joão", "maria");

// Lambda
nomes.forEach(nome -> System.out.println(nome));

// Method Reference
nomes.forEach(System.out::println);
```

### 🔹 Default Methods em Interfaces

#### ❓ O que é?
Permite adicionar métodos com implementação padrão em interfaces.

#### 💡 Exemplo Simples
```java
public interface Veiculo {
    void acelerar();
    
    // Método padrão
    default void buzinar() {
        System.out.println("Beep beep!");
    }
}

public class Carro implements Veiculo {
    public void acelerar() {
        System.out.println("Carro acelerando...");
    }
    // buzinar() é herdado automaticamente
}
```

### 🔹 Nova API de Data e Hora

#### ❓ O que é?
API moderna e imutável para trabalhar com datas, substituindo Date e Calendar.

#### 💡 Exemplo Simples
```java
// LocalDate, LocalTime, LocalDateTime
LocalDate hoje = LocalDate.now();
LocalDate amanha = hoje.plusDays(1);
LocalDateTime agora = LocalDateTime.now();

// Formatação
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
String dataFormatada = hoje.format(formatter);

// Parsing
LocalDate data = LocalDate.parse("25/12/2024", formatter);
```

📚 **Saiba mais**: [Java 8 Date/Time API Guide](https://www.oracle.com/technical-resources/articles/java/jf14-date-time.html)

---

## 🎯 Impacto e Importância

Java 8 foi **a versão mais transformadora** desde o Java 5, introduzindo:

- **Programação Funcional** no Java
- **Código mais conciso** e legível
- **Performance melhorada** com Streams paralelos
- **Redução de bugs** com Optional
- **API moderna** para datas

---

## 📅 Informações da Versão

- **📅 Lançamento**: Março de 2014
- **🔧 Tipo**: LTS (Long Term Support)
- **⚡ Suporte**: Até 2030+ (algumas distribuições)
- **🎯 Status**: Ainda muito utilizado em produção

---

## 🔗 Links Úteis

- [Oracle Java 8 Documentation](https://docs.oracle.com/javase/8/)
- [Java 8 Lambda Tutorial](https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html)
- [Stream API Examples](https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/) 