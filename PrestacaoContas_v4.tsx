import { useState } from 'react';
import { generos, type Gasto } from '../data/gastos';

const colorMap: Record<string, {
  bg: string; text: string; border: string;
  badge: string; dot: string; light: string;
}> = {
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-700',   border: 'border-teal-200',   badge: 'bg-teal-600',   dot: 'bg-teal-500',   light: 'bg-teal-100' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', badge: 'bg-violet-600', dot: 'bg-violet-500', light: 'bg-violet-100' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', badge: 'bg-indigo-600', dot: 'bg-indigo-500', light: 'bg-indigo-100' },
  sky:    { bg: 'bg-sky-50',    text: 'text-sky-700',    border: 'border-sky-200',    badge: 'bg-sky-600',    dot: 'bg-sky-500',    light: 'bg-sky-100' },
  amber:  { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200',  badge: 'bg-amber-500',  dot: 'bg-amber-400',  light: 'bg-amber-100' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', badge: 'bg-orange-500', dot: 'bg-orange-400', light: 'bg-orange-100' },
  cyan:   { bg: 'bg-cyan-50',   text: 'text-cyan-700',   border: 'border-cyan-200',   badge: 'bg-cyan-600',   dot: 'bg-cyan-500',   light: 'bg-cyan-100' },
  rose:   { bg: 'bg-rose-50',   text: 'text-rose-700',   border: 'border-rose-200',   badge: 'bg-rose-600',   dot: 'bg-rose-500',   light: 'bg-rose-100' },
  slate:  { bg: 'bg-slate-50',  text: 'text-slate-700',  border: 'border-slate-200',  badge: 'bg-slate-600',  dot: 'bg-slate-500',  light: 'bg-slate-100' },
};

function EspecieDetalhe({ esp, colors }: { esp: Gasto; colors: ReturnType<typeof colorMap[string]> }) {
  return (
    <div className="space-y-4">

      {/* ── Documentos Necessários ── */}
      <div className={`rounded-xl border ${colors.border} overflow-hidden`}>
        <div className={`flex items-center gap-2.5 px-4 py-3 ${colors.bg}`}>
          <span className={`material-symbols-outlined text-[18px] ${colors.text}`}>folder_open</span>
          <span className={`text-sm font-bold ${colors.text}`}>Documentos Necessários</span>
        </div>
        <div className="bg-white px-4 py-3 space-y-2">
          {esp.documentos.map((doc, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[14px] text-on-surface-variant mt-0.5 shrink-0">
                check_box
              </span>
              <span className="text-sm text-on-surface leading-relaxed">{doc}</span>
            </div>
          ))}
          <div className={`mt-3 pt-3 border-t ${colors.border} flex items-center gap-2`}>
            <span className={`material-symbols-outlined text-[14px] ${colors.text}`}>gavel</span>
            <span className={`text-xs font-semibold ${colors.text}`}>{esp.legislacao}</span>
          </div>
        </div>
      </div>

      {/* ── Observações Jurídicas ── */}
      <div className="rounded-xl border border-outline-variant/30 overflow-hidden">
        <div className="flex items-center gap-2.5 px-4 py-3 bg-surface-container">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">balance</span>
          <span className="text-sm font-bold text-on-surface">Observações Jurídicas</span>
        </div>
        <div className="bg-white px-4 py-3 space-y-3">
          {/* Informações gerais — Plano Livre */}
          <p className="text-sm text-on-surface leading-relaxed">{esp.obsJuridicas}</p>

          {/* Informações específicas — Plano Básico (bloqueado) */}
          <div className="relative mt-2 rounded-xl overflow-hidden">
            <div className="p-4 bg-surface-container-low blur-[2px] select-none pointer-events-none">
              <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                {esp.obsEspecificas}
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/80 backdrop-blur-[1px] rounded-xl">
              <div className="flex items-center gap-2 bg-white border border-outline-variant/30 shadow-sm px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">lock</span>
                <span className="text-xs font-bold text-on-surface">Plano Básico</span>
              </div>
              <p className="text-[10px] text-on-surface-variant mt-2">
                Informações específicas disponíveis no Plano Básico
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Botão Simulador — Plano Intermediário ── */}
      <div className="relative rounded-xl overflow-hidden border border-outline-variant/20">
        <div className="flex items-center justify-between px-4 py-3 bg-surface-container-low opacity-50 pointer-events-none select-none">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">calculate</span>
            <div>
              <p className="text-sm font-bold text-on-surface">Simulador de Despesa</p>
              <p className="text-xs text-on-surface-variant">Calcule limites e riscos para esta categoria</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[20px] text-on-surface-variant">arrow_forward</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-end pr-4 pointer-events-none">
          <div className="flex items-center gap-1.5 bg-white border border-outline-variant/30 shadow-sm px-3 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-[13px] text-on-surface-variant">lock</span>
            <span className="text-[10px] font-bold text-on-surface">Plano Intermediário</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function PrestacaoContas() {
  const [selectedGeneroId, setSelectedGeneroId] = useState<string>('');
  const [selectedGasto, setSelectedGasto] = useState<Gasto | null>(null);

  const generoAtivo = generos.find((g) => g.id === selectedGeneroId) ?? null;
  const colors = generoAtivo ? colorMap[generoAtivo.color] : null;

  function selecionarGenero(id: string) {
    if (selectedGeneroId === id) {
      setSelectedGeneroId('');
      setSelectedGasto(null);
    } else {
      setSelectedGeneroId(id);
      setSelectedGasto(null);
    }
  }

  return (
    <div className="pt-16 pb-24 lg:pl-64 lg:pb-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 lg:px-10">

        {/* Header */}
        <header className="flex flex-col gap-1 mb-6 pt-6 lg:pt-10 lg:mb-10">
          <h1 className="text-2xl lg:text-4xl font-extrabold text-on-surface font-headline tracking-tight">
            Informações de Despesas
          </h1>
          <p className="text-on-surface-variant text-sm">
            Selecione um grupo e depois a categoria para ver documentos e orientações jurídicas.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">

          {/* Coluna principal */}
          <div className="lg:col-span-2 space-y-5 lg:space-y-6">

            {/* Grid de gêneros */}
            <section className="bg-surface-container-low p-5 lg:p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="material-symbols-outlined text-primary text-[20px]">category</span>
                <h3 className="text-base lg:text-xl font-bold font-headline">Grupos de Despesa</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {generos.map((genero) => {
                  const c = colorMap[genero.color];
                  const ativo = selectedGeneroId === genero.id;
                  return (
                    <button
                      key={genero.id}
                      onClick={() => selecionarGenero(genero.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 text-center
                        ${ativo
                          ? `${c.bg} ${c.border} ${c.text}`
                          : 'border-outline-variant/20 bg-surface-container-lowest text-on-surface-variant hover:border-outline-variant/50 hover:bg-surface-container'
                        }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0
                        ${ativo ? c.badge : 'bg-surface-container'}`}>
                        <span className={`material-symbols-outlined text-[18px]
                          ${ativo ? 'text-white' : 'text-on-surface-variant'}`}>
                          {genero.icon}
                        </span>
                      </div>
                      <span className="text-[9px] lg:text-[10px] font-semibold leading-tight">{genero.label}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full
                        ${ativo ? `${c.badge} text-white` : 'bg-surface-container text-on-surface-variant'}`}>
                        {genero.especies.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Lista de espécies */}
            {generoAtivo && !selectedGasto && (
              <section className="bg-surface-container-low p-5 lg:p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${colors!.badge}`}>
                    <span className="material-symbols-outlined text-white text-[16px]">{generoAtivo.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-bold font-headline leading-tight">{generoAtivo.label}</h3>
                    <p className="text-xs text-on-surface-variant">{generoAtivo.especies.length} categorias</p>
                  </div>
                </div>
                <ul className="divide-y divide-outline-variant/20">
                  {generoAtivo.especies.map((esp) => (
                    <li key={esp.id}>
                      <button
                        onClick={() => setSelectedGasto(esp)}
                        className="w-full flex items-center gap-3 py-3 px-2 rounded-xl text-left transition-all hover:bg-surface-container"
                      >
                        <span className={`w-2 h-2 rounded-full shrink-0 ${colors!.dot}`} />
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 font-mono ${colors!.badge} text-white`}>
                          {esp.codigo}
                        </span>
                        <span className="text-sm flex-1 font-medium text-on-surface leading-tight">{esp.label}</span>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">chevron_right</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Detalhe da espécie selecionada */}
            {selectedGasto && colors && (
              <section className="bg-surface-container-low p-5 lg:p-8 rounded-2xl shadow-sm">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-5">
                  <button
                    onClick={() => setSelectedGasto(null)}
                    className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                    {generoAtivo?.label}
                  </button>
                  <span className="text-on-surface-variant text-xs">/</span>
                  <span className={`text-xs font-semibold ${colors.text}`}>{selectedGasto.label}</span>
                </div>

                {/* Título da espécie */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${colors.badge}`}>
                    <span className="material-symbols-outlined text-white text-[16px]">{generoAtivo?.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md font-mono ${colors.badge} text-white`}>
                        {selectedGasto.codigo}
                      </span>
                      <h3 className="text-base lg:text-lg font-bold font-headline leading-tight">{selectedGasto.label}</h3>
                    </div>
                  </div>
                </div>

                <EspecieDetalhe esp={selectedGasto} colors={colors} />
              </section>
            )}

            {/* Estado vazio */}
            {!generoAtivo && (
              <div className="bg-surface-container-low rounded-2xl p-10 lg:p-12 flex flex-col items-center justify-center text-center border-2 border-dashed border-outline-variant/30">
                <span className="material-symbols-outlined text-4xl lg:text-5xl text-outline-variant mb-3">touch_app</span>
                <p className="text-on-surface font-semibold font-headline text-sm lg:text-base">Selecione um grupo acima</p>
                <p className="text-on-surface-variant text-xs lg:text-sm mt-1">As categorias aparecerão aqui.</p>
              </div>
            )}
          </div>

          {/* Sidebar direita */}
          <div className="space-y-4 lg:space-y-6">

            {/* Planos */}
            <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                <h5 className="text-sm font-bold font-headline">Planos disponíveis</h5>
              </div>
              <ul className="space-y-2.5 text-xs">
                {[
                  { label: 'Plano Livre', desc: 'Documentos e orientações gerais', icon: 'check_circle', color: 'text-teal-600' },
                  { label: 'Plano Básico', desc: 'Informações jurídicas específicas', icon: 'lock', color: 'text-on-surface-variant' },
                  { label: 'Plano Intermediário', desc: 'Simulador de despesas', icon: 'lock', color: 'text-on-surface-variant' },
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className={`material-symbols-outlined text-[16px] mt-0.5 shrink-0 ${p.color}`}>{p.icon}</span>
                    <div>
                      <span className="font-bold text-on-surface">{p.label}</span>
                      <p className="text-on-surface-variant leading-relaxed">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alerta prazo */}
            <div className="bg-tertiary-container p-5 rounded-2xl flex gap-3">
              <span className="material-symbols-outlined text-on-tertiary-container shrink-0 text-[20px]">schedule</span>
              <div>
                <h5 className="text-sm font-bold text-on-tertiary-container mb-1">Atenção ao Prazo</h5>
                <p className="text-xs text-on-tertiary-container opacity-80 leading-relaxed">
                  As despesas devem ser registradas no SPCE <strong>dentro do prazo legal</strong> do calendário eleitoral.
                </p>
              </div>
            </div>

            {/* SPCE */}
            <div className="bg-surface-container-low p-5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-[20px]">open_in_new</span>
                <h5 className="text-sm font-bold font-headline">Sistema SPCE</h5>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                Todas as despesas eleitorais devem ser lançadas no sistema oficial do TSE.
              </p>
              <a
                href="https://spce.tse.jus.br"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors text-sm"
              >
                <span className="material-symbols-outlined text-[16px]">link</span>
                Acessar SPCE/TSE
              </a>
            </div>

            {/* Legislação */}
            <div className="bg-primary p-5 rounded-2xl text-on-primary relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-[80px]">menu_book</span>
              </div>
              <h5 className="text-sm font-bold mb-1.5 relative z-10">Legislação Eleitoral</h5>
              <p className="text-xs opacity-80 leading-relaxed mb-3 relative z-10">
                Lei que regula as eleições e prestações de contas.
              </p>
              <a
                href="https://www.planalto.gov.br/ccivil_03/leis/l9504.htm"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-2 rounded-xl transition-colors relative z-10"
              >
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                Lei nº 9.504/1997
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-30 overflow-hidden">
        <div className="absolute -top-[10%] left-[20%] w-[35%] h-[35%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute top-[50%] right-[5%] w-[25%] h-[25%] bg-tertiary/10 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
