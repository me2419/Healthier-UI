import java.io.*;  

public class healthier {  

	/** 
	 * @param args 
	 * @throws IOException 
	 */  
	public static void main(String[] args) throws IOException {  
		BP bp = new BP(10, 15, 4);  

		String strLine;
		String strLineOut;

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


		String subArg_test [] = args;
		double[] binaryinput_test = new double[subArg_test.length];
		for(int j=0;j<subArg_test.length;j++)  
		{
			binaryinput_test[j]=Integer.parseInt(subArg_test[j]);
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

		switch (idx) {  
		case 0:  {
			System.out.format("idx= %d   health\n",idx);  
			break;
		}
		case 1:	{
			System.out.format("idx= %d   Kidneyyindeficiency\n",idx);  
			break;
		}
		case 2: {
			System.out.format("idx= %d   Kidneyyangdeficiency\n",idx);  
			break;
		}
		case 3: {  
			System.out.format("idx= %d   KidneyQiweakness\n",idx);  
			break;
		}

		}

		br.close();
		bo.close();


	}  

}  