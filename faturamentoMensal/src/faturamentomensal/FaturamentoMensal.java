package faturamentomensal;

public class FaturamentoMensal {

    static double calculoMedia(double contribuicao, double soma) {
        return ((contribuicao / soma) * 100);
    }

    public static void main(String[] args) {
        float soma = (float) (67836.45 + 36678.66 + 29229.88 + 27165.48 + 19849.53);

        System.out.println("O porcentual da contribuicao de SP foi: " + String.format("%.2f", calculoMedia(67836.45, soma)));
        System.out.println("O porcentual da contribuicao de RJ foi: " + String.format("%.2f", calculoMedia(36678.66, soma)));
        System.out.println("O porcentual da contribuicao de MG foi: " + String.format("%.2f", calculoMedia(29229.88, soma)));
        System.out.println("O porcentual da contribuicao de ES foi: " + String.format("%.2f", calculoMedia(27165.48, soma)));
        System.out.println("O porcentual da contribuicao de Outros foi: " + String.format("%.2f", calculoMedia(19849.53, soma)));


    }

}
