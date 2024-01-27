import { useEffect, useRef } from "react"
import * as S from './styled'

const MatrixCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabet = katakana + latin + nums;
  const fontSize = 10;
  const cols = window.innerWidth/fontSize;
  const rainArray: number[] = []
  let context: CanvasRenderingContext2D | null = null;
  let canvas: HTMLCanvasElement | null = null;
  for (let x=0; x < cols; x++) {
    rainArray[x] = 1;
  }
  
  useEffect(() => {
    canvas = canvasRef.current;
    if(canvas)  {
      context = canvas.getContext('2d');
    }
  }, [])

  
  const draw = () => {
    if(context && canvas) {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0F0';
      context.font = fontSize + 'px monospace'
      
      for(let i = 0; i < rainArray.length; i++)
      {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainArray[i]*fontSize);
        
        if(rainArray[i]*fontSize > canvas.height && Math.random() > 0.975){
          rainArray[i] = 0;
        }
        rainArray[i]++;
      }
    }
  }
  setInterval(draw, 100);

  return (
    <S.StyledCanvas ref={canvasRef} width={window.innerWidth/4} height={window.innerHeight/4} />
  )
}

export default MatrixCanvas;