import { useEffect, useState } from "react";
import GlowingButton from "../../components/glowingButton";
import * as S from "./styled";
import Particle from "../../components/cursorParticle";
import FadeInButton from "../../components/FadeInButton";
import MatrixCanvas from "../../components/matrixCanvas";
import { Link } from "react-router-dom";

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
        id: Date.now()
      };

      setParticles(currentParticles => [...currentParticles, newParticle]);

      setTimeout(() => {
        setParticles(currentParticles => 
          currentParticles.filter(particle => particle.id !== newParticle.id)
        );
      }, 5000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <>
    <S.Row>
    <Link to='/2' style={{color: 'white', textDecoration: 'none'}}>Page 2</Link>
    </S.Row>
    <S.Row>
      <MatrixCanvas />
      {particles.map(particle => (
        <Particle key={particle.id} style={particle.style} />
      ))} 
      <S.ButtonContainer>
        <GlowingButton />
        <FadeInButton />
      </S.ButtonContainer>
    </S.Row>
  </>
}

export default MainPage;
