import { CSSProperties } from 'styled-components';
import * as S from './styled';

type ParticleProps = {
  style: CSSProperties;
}

const Particle = ({ style }: ParticleProps) => {
  return <S.SingleParticle style={style}></S.SingleParticle>;
};

export default Particle;