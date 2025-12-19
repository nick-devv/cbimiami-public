"use client";

import { useState } from "react";

interface CourseTestimonialsProps {
  title?: string;
  originalPrice?: string;
  installmentPrice?: string;
  installmentCount?: number;
  cashPrice?: string;
  discount?: string;
  benefits?: string[];
  enabled?: boolean;
}

export function CourseTestimonials({
  title = "A melhor formação que você merece para transformar vidas autistas e com outros transtornos",
  originalPrice = "R$ 4000,00",
  installmentPrice = "R$ 317,00",
  installmentCount = 12,
  cashPrice = "R$ 3.804,00",
  discount = "17% off",
  benefits,
  enabled = true,
}: CourseTestimonialsProps) {
  if (!enabled) return null;

  const defaultBenefits = [
    "Pós-graduação completa do maior instituto de educação online em saúde mental da América Latina.",
    "E-book criado pessoalmente pelo fundador do CBI of Miami, com tema específico de acordo com a sua pós.",
    "Mentoria Marca Pessoal Magnética: Como conquistar pacientes de forma autêntica na internet",
    "Mentoria Masterclass Atendimento Nível Disney: Técnicas da Disney para encantar pacientes",
    "Acesso Estendido: 36 meses totais para consultar o conteúdo.",
    "Dupla Certificação: Certificado Nacional MEC e Certificado Internacional CBI",
    "Mentorias ao vivo: com os maiores nomes em saúde mental do Brasil",
  ];

  const displayBenefits = benefits && benefits.length > 0 ? benefits : defaultBenefits;

  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    celular: "",
    termos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section className="section bg-primary-light">
      <div className="container">
        <div className="flex flex-col gap-10 rounded-xl py-space-xl">
          <p className="max-w-[902px] whitespace-pre-wrap font-sans text-[36px] leading-[44px] text-primary-dark">
            <span className="font-normal">A melhor formação que você merece </span>
            <span className="font-bold">para transformar vidas autistas e com outros transtornos</span>
          </p>

          <div className="relative flex flex-col items-start justify-between gap-8 bg-gradient-to-r from-[rgba(255,255,255,0.15)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.15)] lg:flex-row lg:gap-0">
            <div className="sticky top-0 flex w-full flex-col gap-8 overflow-clip lg:w-[540px] lg:shrink-0">
              <div className="relative flex w-full max-w-[490px] flex-col items-start justify-center gap-[30px] rounded-sm bg-primary p-10">
                <div className="absolute -right-[25px] top-8 z-10 flex h-[40px] w-[117px] items-center justify-center rounded-[10px] bg-primary-dark">
                  <p className="font-display text-[20px] font-bold leading-[1.2] text-white">{discount}</p>
                </div>

                <div className="flex flex-col leading-[0] text-white">
                  <p className="font-display text-[30px] font-bold leading-[1.2] line-through text-[rgba(255,255,255,0.5)]">
                    {originalPrice}
                  </p>
                  <br aria-hidden="true" />
                  <p className="font-display text-[18px] leading-[1.2] text-white">por {installmentCount}x de</p>
                  <br aria-hidden="true" />
                  <p className="font-display text-[70px] font-bold leading-[70px] text-white">
                    {installmentPrice} <span className="font-display text-[18px] leading-[70px]">/ mês</span>
                  </p>
                </div>

                <div className="flex h-[40px] w-[334px] items-center justify-center rounded-[10px] bg-primary-dark px-10">
                  <p className="w-[304px] whitespace-pre-wrap text-center font-display text-[14px] font-bold leading-[1.2] text-white">
                    ou {cashPrice} à vista no pix ou boleto
                  </p>
                </div>
              </div>

              <div className="flex min-w-full flex-col whitespace-pre-wrap text-primary-dark">
                <p className="mb-4 font-sans text-[18px] font-bold tracking-[-0.18px]">
                  Pós-graduação em Intervenção ABA para Autismo e Deficiência Intelectual. Tudo que você terá acesso:
                </p>
                {displayBenefits.map((benefit, idx) => (
                  <p key={idx} className="mb-4 font-sans text-[16px]">
                    {benefit.startsWith("Pós") ? (
                      <>
                        <span className="font-bold">✅ Pós</span>
                        <span className="font-normal">{benefit.substring(3)}</span>
                      </>
                    ) : (
                      <span className="font-normal">✅ {benefit}</span>
                    )}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-6 rounded-sm border border-primary bg-white px-9 py-10 lg:w-[518px]">
              <p className="min-w-full whitespace-pre-wrap font-sans text-[18px] font-normal leading-normal text-primary-dark">
                Para verificar se você é elegível para uma bolsa de estudos exclusiva, basta preencher o formulário:
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
                    <p className="w-full whitespace-pre-wrap font-sans text-[18px] font-bold leading-normal text-primary-dark">
                      Nome
                    </p>
                    <div className="flex h-[44px] items-center gap-4 rounded-sm bg-primary-light px-5 py-[22px]">
                      <div className="relative h-5 w-5 shrink-0 opacity-50">
                        <svg
                          className="h-full w-full"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                            fill="#352d62"
                          />
                          <path
                            d="M10 11C5.58172 11 2 13.6863 2 17V20H18V17C18 13.6863 14.4183 11 10 11Z"
                            fill="#352d62"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: João Santos"
                        className="min-h-0 min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap bg-transparent font-display text-[16px] leading-normal text-primary-dark opacity-50 placeholder:text-primary-dark focus:outline-none focus:opacity-100"
                      />
                    </div>
                  </div>
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
                    <p className="w-full whitespace-pre-wrap font-sans text-[18px] font-bold leading-normal text-primary-dark">
                      Sobrenome
                    </p>
                    <div className="flex h-[44px] items-center gap-4 rounded-sm bg-primary-light px-5 py-[22px]">
                      <div className="relative h-5 w-5 shrink-0 opacity-50">
                        <svg
                          className="h-full w-full"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                            fill="#352d62"
                          />
                          <path
                            d="M10 11C5.58172 11 2 13.6863 2 17V20H18V17C18 13.6863 14.4183 11 10 11Z"
                            fill="#352d62"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="sobrenome"
                        value={formData.sobrenome}
                        onChange={handleChange}
                        placeholder="Ex: VisualLOC"
                        className="min-h-0 min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap bg-transparent font-display text-[16px] leading-normal text-primary-dark opacity-50 placeholder:text-primary-dark focus:outline-none focus:opacity-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
                    <p className="w-full whitespace-pre-wrap font-sans text-[18px] font-bold leading-normal text-primary-dark">
                      E-mail
                    </p>
                    <div className="flex h-[44px] items-center gap-4 rounded-sm bg-primary-light px-5 py-[22px]">
                      <div className="relative h-5 w-5 shrink-0 opacity-50">
                        <svg
                          className="h-full w-full"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 3H2C0.9 3 0 3.9 0 5V15C0 16.1 0.9 17 2 17H18C19.1 17 20 16.1 20 15V5C20 3.9 19.1 3 18 3ZM18 5L10 10L2 5H18ZM2 15V7L10 12L18 7V15H2Z"
                            fill="#352d62"
                          />
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: joao@santos.com"
                        className="min-h-0 min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap bg-transparent font-display text-[16px] leading-normal text-primary-dark opacity-50 placeholder:text-primary-dark focus:outline-none focus:opacity-100"
                      />
                    </div>
                  </div>
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
                    <p className="w-full whitespace-pre-wrap font-sans text-[18px] font-bold leading-normal text-primary-dark">
                      Celular / WhatsApp
                    </p>
                    <div className="flex h-[44px] items-center gap-4 rounded-sm bg-primary-light px-5 py-[22px]">
                      <div className="relative h-5 w-5 shrink-0 opacity-50">
                        <svg
                          className="h-full w-full"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 14.5L14.5 11.5L13.5 12.5L14.5 13.5C14.2 14.1 13.7 14.6 13.1 14.9L12.1 13.9L11.1 14.9C10.4 15.6 9.3 15.6 8.6 14.9L5.1 11.4C4.4 10.7 4.4 9.6 5.1 8.9L6.1 7.9L5.1 6.9C5.4 6.3 5.9 5.8 6.5 5.5L7.5 6.5L8.5 5.5L5.5 2.5C5.2 2.2 4.7 2.2 4.4 2.5L2.5 4.4C1.5 5.4 1 6.7 1 8C1 12.4 4.6 16 9 16C10.3 16 11.6 15.5 12.6 14.5L14.5 12.6C14.8 12.3 14.8 11.8 14.5 11.5L17.5 14.5Z"
                            fill="#352d62"
                          />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                        placeholder="Ex: (00) 90000-0000"
                        className="min-h-0 min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap bg-transparent font-display text-[16px] leading-normal text-primary-dark opacity-50 placeholder:text-primary-dark focus:outline-none focus:opacity-100"
                      />
                    </div>
                  </div>
                </div>

                <p className="h-[29px] w-full whitespace-pre-wrap font-sans text-[14px] font-bold leading-normal text-primary-dark">
                  O Grupo Primum protege sua privacidade e usará seus dados apenas para gerenciar sua conta e fornecer produtos e serviços.
                </p>

                <div className="flex gap-[10px]">
                  <input
                    type="checkbox"
                    name="termos"
                    checked={formData.termos}
                    onChange={handleChange}
                    className="h-5 w-5 shrink-0 rounded-[3px] border border-primary bg-white"
                  />
                  <p className="min-h-0 min-w-0 flex-1 whitespace-pre-wrap font-sans text-[12px] font-normal leading-normal text-primary-dark">
                    Eu concordo com os termos de serviço / termos de uso e com as políticas de privacidade e aceito receber quaisquer outras comunicações de acordo com os Termos e Políticas do Grupo Primum.*
                  </p>
                </div>

                <button
                  type="submit"
                  className="flex w-auto self-start items-center gap-[9.348px] rounded-sm bg-secondary pl-[18.696px] pr-[14.022px] py-[9.348px]"
                >
                  <span className="whitespace-nowrap text-center font-sans text-[20px] font-bold leading-none text-white">
                    Matricular
                  </span>
                  <div className="relative h-[28.043px] w-[28.043px] shrink-0">
                    <svg
                      className="h-full w-full"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <div className="flex min-h-[152px] flex-col items-start justify-end gap-5">
                  <p className="w-full whitespace-pre-wrap font-display text-[14px] font-bold leading-normal text-primary-dark">
                    Opções de pagamento:
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <img src="/pay01.png" alt="Método de pagamento 1" className="h-12 w-[76px] shrink-0 object-contain" />
                    <img src="/pay02.png" alt="Método de pagamento 2" className="h-12 w-[76px] shrink-0 object-contain" />
                    <img src="/pay03.png" alt="Método de pagamento 3" className="h-12 w-[76px] shrink-0 object-contain" />
                    <img src="/pay04.png" alt="Método de pagamento 4" className="h-12 w-[76px] shrink-0 object-contain" />
                    <img src="/pay05.png" alt="Método de pagamento 5" className="h-12 w-[76px] shrink-0 object-contain" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseTestimonials;
