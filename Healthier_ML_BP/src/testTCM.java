
import java.io.*;  

public class testTCM {  

	/** 
	 * @param args 
	 * @throws IOException 
	 */  
	public static void main(String[] args) throws IOException {  
		BP bp = new BP(10, 15, 4);  


		String strLine;
		String strLineOut;
		String strLine_test;
		String strLineOut_test;

		int correctnum = 0;
		int incorrectnum = 0;
		int KidneyQiweaknessnum = 0;
		int Kidneyyangdeficiencynum = 0;
		int Kidneyyindeficiencynum = 0;

		FileInputStream fstream = new FileInputStream("Input.txt");
		DataInputStream in = new DataInputStream(fstream);
		BufferedReader br = new BufferedReader(new InputStreamReader(in));

		FileInputStream fstreamout = new FileInputStream("Output.txt");
		DataInputStream out = new DataInputStream(fstreamout);
		BufferedReader bo = new BufferedReader(new InputStreamReader(out));

		while ((strLine = br.readLine()) != null)   {
			strLineOut = bo.readLine();
			String subArg [] = strLine.split(" "); 
			double[] binaryinput = new double[subArg.length];
			for(int i=0;i<subArg.length;i++)  
			{
				binaryinput[i]=Integer.parseInt(subArg[i]);
			}
			String subArgOut [] = strLineOut.split(" "); 
			double[] binaryoutput = new double[subArgOut.length];
			for(int j=0;j<subArgOut.length;j++)  
			{
				binaryoutput[j]=Integer.parseInt(subArgOut[j]);
			}
			bp.train(binaryinput, binaryoutput);

		}


		FileInputStream fstream_test = new FileInputStream("TestInput.txt");
		DataInputStream in_test = new DataInputStream(fstream_test);
		BufferedReader br_test = new BufferedReader(new InputStreamReader(in_test));

		FileInputStream fstreamout_test = new FileInputStream("TestOutput.txt");
		DataInputStream out_test = new DataInputStream(fstreamout_test);
		BufferedReader bo_test = new BufferedReader(new InputStreamReader(out_test));


		while ((strLine_test = br_test.readLine()) != null)   {
			strLineOut_test = bo_test.readLine();
			int rightanswer = -99;
			String subArg_test [] = strLine_test.split(" "); 
			double[] binaryinput_test = new double[subArg_test.length];
			for(int i=0;i<subArg_test.length;i++)  
			{
				binaryinput_test[i]=Integer.parseInt(subArg_test[i]);
			}
			String subArgOut_test [] = strLineOut_test.split(" "); 
			double[] binaryoutput_test = new double[subArgOut_test.length];
			for(int j=0;j<subArgOut_test.length;j++)  
			{
				binaryoutput_test[j]=Integer.parseInt(subArgOut_test[j]);
				if(binaryoutput_test[j]==1){
					rightanswer = j;
				}
			}
			double[] result = bp.test(binaryinput_test);
			double max = -Integer.MIN_VALUE;  
			int idx = -1;  

			for (int i = 0; i != result.length; i++) {  
				if (result[i] > max) {  
					max = result[i];  
					idx = i;  
				}  
			}  

			if(rightanswer==idx){
				correctnum++;
			}
			else{
				incorrectnum++;
			}

			switch (idx) {  
			case 0:  {
				System.out.format("health\n");  
				break;
			}
			case 1:	{
				System.out.format("Kidneyyindeficiency\n");  
				KidneyQiweaknessnum++;
				break;
			}
			case 2: {
				System.out.format("Kidneyyangdeficiency\n");  
				Kidneyyangdeficiencynum++;
				break;
			}
			case 3: {  
				System.out.format("KidneyQiweakness\n");  
				Kidneyyindeficiencynum++;
				break;
			}
			}  
		}

		System.out.format("correct num %d\n",correctnum);  		
		System.out.format("incorrect num %d\n",incorrectnum);  	
		System.out.format("Kidneyyindeficiency num %d\n",KidneyQiweaknessnum);  		
		System.out.format("Kidneyyangdeficiency num %d\n",Kidneyyangdeficiencynum);  	
		System.out.format("KidneyQiweakness num %d\n",Kidneyyindeficiencynum);  		

		br.close();
		bo.close();
		br_test.close();
		bo_test.close();
	}  

}  