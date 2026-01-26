import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Calendar, Mail, ArrowLeft } from "lucide-react";

export default function MerciRDV() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    // Confettis (petit burst propre)
   confetti({
  particleCount: 20,
  spread: 60,
  origin: { y: 0.65 },
});
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 flex items-center justify-center px-4">
      <div
        className={[
          "w-full max-w-xl rounded-[2rem] border border-slate-100 bg-white shadow-2xl p-8 md:p-10",
          "transition-all duration-700",
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-green-50 p-4 border border-green-100">
            <CheckCircle2 className="h-14 w-14 text-green-600" />
          </div>
        </div>

        <h1 className="mt-6 text-center text-3xl md:text-4xl font-extrabold text-slate-900">
          Merci 🙏
        </h1>

        <p className="mt-3 text-center text-slate-600 font-medium">
          Votre rendez-vous est confirmé. Vous recevrez un email avec les instructions.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
            <Calendar className="mt-0.5 h-5 w-5 text-slate-500" />
            <div>
              <p className="font-bold text-slate-800">Prochaine étape</p>
              <p className="text-sm text-slate-600">
                Vérifiez votre email et ajoutez le rendez-vous à votre calendrier.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
            <Mail className="mt-0.5 h-5 w-5 text-slate-500" />
            <div>
              <p className="font-bold text-slate-800">Besoin d’aide ?</p>
              <p className="text-sm text-slate-600">
                Si vous ne recevez rien dans quelques minutes, regardez vos spams.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-4 font-black bg-slate-900 text-white hover:opacity-90 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Retour au site
          </a>

          <a
            href="mailto:contact@comafis.ch"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-4 font-black bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 transition"
          >
            Contacter le support
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Vous pouvez fermer cette page.
        </p>
      </div>
    </div>
  );
}

