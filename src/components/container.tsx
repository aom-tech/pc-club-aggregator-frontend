type ContainerProps = {
    children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="bg-black">
            <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col border-l border-r">
                {children}
            </div>
        </div>
    )
}
