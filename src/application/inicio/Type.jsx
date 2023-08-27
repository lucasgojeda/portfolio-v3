import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{

        strings: [
          "FullStack developer (MERN)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,

      }}
    />
  );
}
