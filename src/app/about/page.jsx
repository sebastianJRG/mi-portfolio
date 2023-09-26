import Image from "next/image";
import profile from "@/assets/profile.png"

const AboutPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-4 py-0">
  <div className="text-center">
    <Image
      src={profile}
      alt="Sebastián Rodrigo"
      width={200}
      height={200}
      className="rounded-full mx-auto mb-4"
    />
    <h1 className="text-3xl font-semibold">Soy Sebastián Rodrigo</h1>
    <p className="mt-4">
      Tengo 20 años y actualmente estoy estudiando Ingeniería en Sistemas de Información en la UTN Regional Buenos Aires. Comencé con el mundo del desarrollo durante mi último año de secundaria y en 2021 me decanté por el desarrollo web.
    </p>
    <p className="mt-4">
      Aprendí de manera autodidacta varias tecnologías como JavaScript, Node.js, HTML y CSS, entre otros. En el proceso, tomé distintos cursos de programación para poder mejorar mi código y hacerlo más limpio y eficiente. En 2022, profundice mi conomiento de React.js, Express, bases de datos y cómo estructurar un proyecto full-stack, que era lo que al principio más me costaba.
    </p>
    <p className="mt-4">
      Todo el mundo del desarrollo de software me apasiona. El poder aprender nuevas tecnologías me parece emocionante. Actualmente, sigo puliendo mis habilidades en JavaScript, pero también estoy estudiando otros lenguajes para poder aplicar en el backend. Me encanta explorar nuevas tecnologías más rápidas y eficientes que las que tenemos actualmente.
    </p>
  </div>
</div>


    );
}

export default AboutPage;
/*
<div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center p-4">
            <div className="text-center">
                <Image
                    src={profile}
                    alt="Sebastián Rodrigo"
                    width={200} // Ajusta el ancho de la imagen según tus preferencias
                    height={200} // Ajusta la altura de la imagen según tus preferencias
                    className="rounded-full mx-auto mb-4 md:float-left md:mr-4"
                />
                <h1 className="text-3xl font-semibold">Soy Sebastián Rodrigo</h1>
                <p className="mt-4">
                    Tengo 20 años y actualmente estoy estudiando Ingeniería en Sistemas de Información en la UTN Regional Buenos Aires. Comencé con el mundo del desarrollo durante mi último año de secundaria y en 2021 me decanté por el desarrollo web.
                </p>
                <p className="mt-4">
                    Aprendí de manera autodidacta varias tecnologías como JavaScript, Node.js, HTML y CSS, entre otros. En el proceso, tomé distintos cursos de programación para poder mejorar mi código y hacerlo más limpio. En 2022, postulé en el bootcamp Henry, donde me enseñaron más a profundidad React.js, Express, bases de datos y, finalmente, cómo estructurar un proyecto full-stack, que era lo que más me faltaba en ese momento.
                </p>
                <p className="mt-4">
                    Todo el mundo del desarrollo de software me apasiona. El poder aprender nuevas tecnologías me parece emocionante. Actualmente, sigo puliendo mis habilidades en JavaScript, pero también estoy estudiando otros lenguajes para poder aplicar en el backend. Me encanta explorar nuevas tecnologías más rápidas y eficientes que las que tenemos actualmente.
                </p>
            </div>
        </div>
*/