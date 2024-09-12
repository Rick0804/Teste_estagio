package fibonacci;
import java.util.Scanner;
import java.util.Locale;
public class Fibonacci {

   
    public static void main(String[] args) {
        System.out.print("Insira um numero: ");
        Scanner scan = new Scanner(System.in);
        int numero = scan.nextInt();
        int soma = 1;
        int i = 0;
        do {
            if(numero == 0 || numero == soma){
                System.out.println("este numero pertence a sequencia");
                return;
            }
            soma += i;
            i = soma - i;
        } while(i < numero);
            
            System.out.println("O numero desejado nao pertence a sequencia");
            

        }
        
    }
    

