package inversorstring;

public class InversorString {
 
    public static void inversor(String palavra){
        int qntd = palavra.length();
        char[] palavraInvertida = new char[qntd];
        for(int i = 0; i < qntd; i++){
            palavraInvertida[i] = palavra.charAt((qntd - 1) - i);
        }
        
        System.out.println(palavraInvertida);
    }
    
    public static void main(String args[]){
      String palavra = "palavra";
      
      inversor(palavra);
    }
}