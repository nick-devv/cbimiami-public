import Image from "next/image";

interface WhyChooseItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface CourseWhyChooseProps {
  title?: string;
  titleHighlight?: string;
  items?: WhyChooseItem[];
  imageUrl?: string;
  enabled?: boolean;
}

function ProfessorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M28.0002 3.33334H4.00016C2.5335 3.33334 1.3335 4.53334 1.3335 6.00001V16.6667H4.00016V6.00001H28.0002V27.3333C29.4668 27.3333 30.6668 26.1333 30.6668 24.6667V6.00001C30.6668 4.53334 29.4668 3.33334 28.0002 3.33334Z" fill="currentColor"/>
      <path d="M12.0002 18C14.9457 18 17.3335 15.6122 17.3335 12.6667C17.3335 9.72116 14.9457 7.33334 12.0002 7.33334C9.05464 7.33334 6.66683 9.72116 6.66683 12.6667C6.66683 15.6122 9.05464 18 12.0002 18Z" fill="currentColor"/>
      <path d="M20.5202 21.4133C18.2802 20.2667 15.3735 19.3333 12.0002 19.3333C8.62683 19.3333 5.72016 20.2667 3.48016 21.4133C2.14683 22.0933 1.3335 23.4667 1.3335 24.96V28.6667H22.6668V24.96C22.6668 23.4667 21.8535 22.0933 20.5202 21.4133Z" fill="currentColor"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
      <path d="M24 2.66667H22.6667V0H20V2.66667H6.66667V0H4V2.66667H2.66667C1.2 2.66667 0 3.86667 0 5.33333V26.6667C0 28.1333 1.2 29.3333 2.66667 29.3333H24C25.4667 29.3333 26.6667 28.1333 26.6667 26.6667V5.33333C26.6667 3.86667 25.4667 2.66667 24 2.66667ZM24 26.6667H2.66667V9.33333H24V26.6667Z" fill="currentColor"/>
    </svg>
  );
}

function OnlineIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M28.0002 4H4.00016C2.5335 4 1.3335 5.2 1.3335 6.66667V10.6667H4.00016V6.66667H28.0002V25.3333H18.6668V28H28.0002C29.4668 28 30.6668 26.8 30.6668 25.3333V6.66667C30.6668 5.2 29.4668 4 28.0002 4ZM1.3335 24V28H5.3335C5.3335 25.7867 3.54683 24 1.3335 24ZM1.3335 18.6667V21.3333C5.0135 21.3333 8.00016 24.32 8.00016 28H10.6668C10.6668 22.84 6.4935 18.6667 1.3335 18.6667ZM1.3335 13.3333V16C7.96016 16 13.3335 21.3733 13.3335 28H16.0002C16.0002 19.8933 9.42683 13.3333 1.3335 13.3333ZM14.6668 14.7867V17.4533L19.3335 20L24.0002 17.4533V14.7867L19.3335 17.3333L14.6668 14.7867ZM19.3335 8L12.0002 12L19.3335 16L26.6668 12L19.3335 8Z" fill="currentColor"/>
    </svg>
  );
}

function MethodIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18.6667 17.3333L13.3333 12V7.76C14.88 7.2 16 5.73333 16 4C16 1.78667 14.2133 0 12 0C9.78667 0 8 1.78667 8 4C8 5.73333 9.12 7.2 10.6667 7.76V12L5.33333 17.3333H0V24H6.66667V19.9333L12 14.3333L17.3333 19.9333V24H24V17.3333H18.6667Z" fill="currentColor"/>
    </svg>
  );
}

const defaultIcons = [
  <ProfessorIcon key="prof" />,
  <CalendarIcon key="cal" />,
  <OnlineIcon key="online" />,
  <MethodIcon key="method" />,
];

export function CourseWhyChoose({
  title = "Por que",
  titleHighlight = "escolher esse curso?",
  items,
  imageUrl = "/porqueescolher.png",
  enabled = true,
}: CourseWhyChooseProps) {
  if (!enabled) return null;

  const defaultItems: WhyChooseItem[] = [
    {
      title: "Professores mestres e doutores",
      description: "Maiores nomes em saúde mental do Brasil",
    },
    {
      title: "24 meses de duração",
      description: "Formação mais completa e mais aprofundada",
    },
    {
      title: "100% online",
      description: "Acesse de onde quiser no momento que puder",
    },
    {
      title: "Método VAHA",
      description: "exclusivo criado com referência de Harvard e Stanford",
    },
  ];

  const displayItems = items && items.length > 0 ? items : defaultItems;

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="relative">
          <div className="flex items-center gap-12 overflow-hidden rounded-[30px] lg:gap-16">
            {}
            <div className="relative z-[2] hidden shrink-0 lg:block">
              {}
              <svg 
                className="absolute -bottom-[50px] -left-[50px] z-20" 
                xmlns="http://www.w3.org/2000/svg" 
                width="127" 
                height="200" 
                viewBox="0 0 127 200" 
                fill="none"
              >
                <path d="M1.46576 120.829C1.46576 120.829 30.0124 219.513 93.0721 195.598C150.838 173.718 120.154 125.129 106.416 115.669C102.128 112.727 72.5078 94.073 67.1428 71.7568C60.2475 43.1139 68.0319 -1.1115 53.1917 0.0213398C38.3514 1.15417 -8.88475 49.7757 1.46948 120.793L1.46576 120.829Z" fill="#0EDFE3"/>
              </svg>

              {}
              <svg 
                className="absolute -right-10 bottom-[35%] z-20" 
                xmlns="http://www.w3.org/2000/svg" 
                width="88" 
                height="125" 
                viewBox="0 0 88 125" 
                fill="none"
              >
                <path d="M71.1013 11.1708C71.1013 11.1708 92.0495 31.8732 86.2326 61.9571C80.4157 92.0409 66.5318 111.058 39.8692 120.537C14.5951 129.518 2.76541 120.111 0.783366 114.382C-2.86129 103.805 7.00492 94.2784 14.0057 87.0145C18.1251 82.7383 28.1699 66.7812 22.5676 30.8558C16.9641 -5.08291 55.1385 -6.77405 71.1025 11.1841L71.1013 11.1708Z" fill="#F90F6B"/>
              </svg>
              
              {}
              <div className="relative h-[450px] w-[380px] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt="Profissional CBI"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {}
            <div className="relative z-0 flex-1 py-10">
              {}
              <div 
                className="absolute inset-0 h-full rounded-[20px] bg-primary"
                style={{ zIndex: 0, width: '1000%', right: 0, left: 'inherit' }}
              />
              
              <div className="relative z-[1] flex max-w-[480px] flex-col gap-5">
            {}
            <h2 className="text-3xl leading-tight text-white">
              <span className="font-normal">{title} </span>
              <span className="font-bold">{titleHighlight}</span>
            </h2>

            {}
            <div className="flex flex-col">
              {displayItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-4 py-3 ${idx !== 0 ? "border-t border-white" : ""}`}
                >
                  {}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white">
                    {item.icon || defaultIcons[idx] || defaultIcons[0]}
                  </div>
                  
                  {}
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white">{item.title}</span>
                    <span className="text-md font-normal text-white">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseWhyChoose;
