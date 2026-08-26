import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: "KAM Website <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "KAM Website Email Test",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px;">
          <h1 style="color: #202d61;">Kansas Architectural Metals</h1>
          <h2>Email system test successful.</h2>
          <p>
            This message was sent from the KAM website's Next.js backend
            through Resend.
          </p>
          <p>
            Architectural Metals. Built by Pros.
          </p>
        </div>
      `,
    });

    if (error) {
      return Response.json({ success: false, error }, { status: 500 });
    }

    return Response.json({
      success: true,
      message: "KAM test email sent successfully.",
      data,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}