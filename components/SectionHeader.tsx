type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inverse?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className={`eyebrow ${inverse ? 'text-accent-lime' : 'text-primary-700'}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-heading font-bold md:text-4xl ${inverse ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`section-deck ${align === 'center' ? 'mx-auto' : ''} ${
            inverse ? 'section-deck--inverse' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
