import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";


export async function POST(request: Request) {

  try {

    const formData = await request.formData();

    const file = formData.get("file") as File;


    if (!file) {

      return NextResponse.json(
        {
          error: "Nenhum arquivo enviado"
        },
        {
          status: 400
        }
      );

    }


    console.log("Processando:", file.name);


    const bytes = await file.arrayBuffer();


    const pdf = await PDFDocument.load(bytes);


    const pdfBytes = await pdf.save({
      useObjectStreams: true
    });


    console.log(
      "Tamanho original:",
      file.size,
      "bytes"
    );


    console.log(
      "Novo tamanho:",
      pdfBytes.length,
      "bytes"
    );


    return new NextResponse(Buffer.from(pdfBytes), {

  headers: {

    "Content-Type": "application/pdf",

    "Content-Disposition":
      `attachment; filename="${file.name.replace(".pdf", "")}-comprimido.pdf"`

  }

});


  } catch (error) {


    console.error(error);


    return NextResponse.json(
      {
        error: "Erro ao processar PDF"
      },
      {
        status: 500
      }
    );


  }

}