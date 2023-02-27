export function determineCaseSuffix(cityName) {
  const lastLetter = cityName.charAt(cityName.length - 1);
  const previousLetter = cityName.charAt(cityName.length - 2);

  if (["ç", "f", "h", "k", "p", "s", "ş", "t"].includes(lastLetter))
  {
    if (["a", "ı", "o", "u"].includes(previousLetter))
    {
      return "'tan";
    }
    else if (["e", "i", "ö", "ü"].includes(previousLetter))
    {
      return "'ten";
    }
  }
  else if (["e", "i"].includes(lastLetter))
  {
    return "'den";
  }
  else
  {
    return "'dan";
  }
}
export function determineToSuffix(cityName) {
  const lastLetter = cityName.charAt(cityName.length - 1);

  if (["a", "ı", "o", "u","e", "i", "ö", "ü"].includes(lastLetter))
  {
    if (["a", "ı", "o", "u"].includes(lastLetter))
    {
      return "'ya";
    }
    else if (["e", "i", "ö", "ü"].includes(lastLetter))
    {
      return "'ye";
    }
  }
  else if (["ç", "f", "h", "k", "p", "s", "ş", "t"].includes(lastLetter))
  {
    return "'e";
  }
  else
  {
    return "'a";
  }
}