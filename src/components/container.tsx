type ContainerProps = {
    children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
    return (
        <div className="bg-black">
            <div className='max-w-screen-xl mx-auto min-h-screen flex flex-col border-l border-r'>
                {children}
            </div>
        </div>
    );
}
