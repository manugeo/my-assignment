import { cn } from "@/lib/utils"

export function TextH1({ className, children }) {
  return (
    <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
      {children}
    </h1>
  )
}
export function TextH2({ className, children }) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className)}>
      {children}
    </h2>
  )
}
export function TextH3({ className, children }) {
  return (
    <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
      {children}
    </h3>
  )
}
export function TextH4({ className, children }) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  )
}
export function TextP({ className, children }) {
  return (
    <p className={cn("leading-7", className)}>
      {children}
    </p>
  )
}
export function TextInlineCode({ className, children }) {
  return (
    <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}>
      {children}
    </code>
  )
}
export function TextLead({ className, children }) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  )
}
export function TextLarge({ className, children }) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  )
}
export function TextSmall({ className, children }) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>
  )
}
export function TextVerySmall({ className, children }) {
  return (
    <p className={cn("text-xs leading-none", className)}>{children}</p>
  )
}
export function TextMuted({ className, children }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  )
}

