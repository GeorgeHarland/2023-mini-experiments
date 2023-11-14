import { useEffect, useState } from "react";
import GlowingButton from "../../components/glowingButton";
import * as S from "./styled";
import Particle from "../../components/cursorParticle";
import FadeInButton from "../../components/FadeInButton";

type ParticleType = {
  style: {
    left: number;
    top: number;
  };
  id: number;
};

const MainPage = () => {
  const [particles, setParticles] = useState<ParticleType[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newParticle = {
        style: {
          left: event.clientX,
          top: event.clientY
        },
        id: Date.now() // unique identifier
      };

      setParticles(currentParticles => [...currentParticles, newParticle]);

      setTimeout(() => {
        setParticles(currentParticles => 
          currentParticles.filter(particle => particle.id !== newParticle.id)
        );
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <S.Wrapper>
    {particles.map(particle => (
      <Particle key={particle.id} style={particle.style} />
    ))} 
    <S.ButtonContainer>
      <GlowingButton />
      <FadeInButton />
    </S.ButtonContainer>
  </S.Wrapper>
}

export default MainPage;
