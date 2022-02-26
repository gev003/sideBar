

const firstLetterUppercase = (name: string) => {
    
    const result = name.charAt(0).toUpperCase() + name.slice(1, name.length)

    return result
}

export default firstLetterUppercase;