import React from 'react';
import ReactHtmlParser, { } from 'react-html-parser';

class Wireframe extends React.Component {
  render() {
    const html = '<iframe frameborder="0" style="width:615px;height:615px;" src="https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=#R%3Cmxfile%3E%3Cdiagram%20id%3D%22U6GAyfejCOMbGzcqvXXO%22%20name%3D%22Home%22%3E7Vhde9ogGP01XuoTQhLjZaJdu4ttfdqubld7MkMNGwkpwar79YMA%2BW5r3Vwv1huVA7yE9xxeThzBebo7Z1GefKAxIiPbincjuBjZtm854lMCewU40FLAmuFYQQ3gGv9CCgQG3eAYFRpTEKeUcJy3wRXNMrTiLSxijG7bw%2B4oiVtAHq1RD7heRaSPLnHME70t16rxC4TXiVkZWLonjcxgDRRJFNNtA4JnIzhnlHL1K93NEZG5M3mhNzkbf74F0M%2B8gCbL6%2BzBHqtg714ypdoCQxk%2FOvRiyc4hvrsKnfNPyJvdsHv%2BbQxV6IeIbHS%2B9F753iSQ0U0WIxkEjGC4TTBH13m0kr1boRiBJTwluvsOEzKnhLJyLgzt%2BSwIBV5wRn%2BiRs%2FU94MAyhk04w3c8ZyZuxD4gXvWuXlAjKNdg3Gdg3NEU8TZXgwxvYZOrWfb8L2t1SFUr7CkoQxoBkZakesqdp118UMn%2FgUkuAMkeEQsG%2BYtKrz7jdRaSHCGxubRAjGk1KxbDxC%2F1vqbqO93eRdLwGBsSce4KE9xGdnLd%2F24l4z%2BkGfVtq7Q%2FQYzlAqSisZqMvhRy4Gh5UwMOfjwKFY50yr7to1kZZSlEemvskA8wqSYTCYCiVIp7Ox7kbfTqB6hl923%2Ff5v%2B%2B2dp%2FYZ69RQUZt4u1C2C2JGM9SpnhoqRKnF2VoAbt26oeKxF%2BMyBUMFmYpyeEfKuyrBcYwygdVl3HqNqgtnEwgs6Di%2BPXV9z9wzpgiDfhEGPpxUwy3Pn%2Fn9mjw7VUk2zzNQkw9WqTuk9Y%2FBbRhcPaq4v6abiOC1oH2xEkQigYeSKyxsUaA7UiEMucyggF5XLNBtX9F%2BXxyzwQv6VGIAA2LoMIWyOJButWYgjoqksk0NBiV%2BGXHBSlYitgUrXo1DFckJRVLZ%2FoukYOKa5lcdo2wsdpof1dqb1g5zNW3q6ubXRlc9SzbMpFP7s4Ju2Ao9lWOdUh6xNeIHnEwUt3z%2Fo2Kq%2FJ0WE5j21eQOqMl9Qk16sUuKy1JgZAs6zrIbQiVBz2o69W4g7xGLagKpJPUCleKuMvAHerf%2F%2B7cC4B34VuCcrOj0X80uRGjpe6YiorUQZmZftZYI%2FST7t%2FtDEeU9f%2BSBM0CmfSoyn3MTbSspXF52vMO4%2BPThTHTevj9bNmyGitmzrG%2Fuo6ce%2F1nzAeA%2FdR%2FOq7iPykU0TQR40kQ0HIvdsiy1SRm2LK%2FuPqwDzQd8mfd4Xkonch7dW%2BlY5wG6L1hHOw%2FRrP8pVcPrv5vh2W8%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22j6y6hH6URmRIBz3L3QN7%22%20name%3D%22Daily%22%3E7VrbcpswEP0aHp3hYoj9aOOkSaftZOo0l0fVKKApRgTkGPfruwKJu%2BMmcdIaM5NxrCOQdqWzexBexbCXyacIhd5X6mBf0VUnUYyZousjdQifHNhkwNBQM8CNiJNBJWBOfuMM1CS6Ig6OBZZBjFKfkbAKLmgQ4AWrYCiK6Lp62QP1nQoQIhc3gPkC%2BU30ljjME26ZaoFfYOJ6cmZNFT1LJC8WQOwhh65LkHGm6JaiGwlSjKnCsV1%2Fhh1Ryl5xY3WQZWJjn%2B%2BS3AF7dT23Lh4t%2B8f1V%2FO3%2Bvnz6icZZGaff9Bs%2BTpHOGD%2FwqqLywfr8gmtXJfd3d7E1k04fRxIFj4hfyUIAdP6YOD0gYKdsKtsI6hiPa6o7BjEKZEncIFmhknRCd9c%2Fv%2Fb5GY6%2BS7HAoey4bJOwZd8ZJ3hhOMeW%2FoAaPA1ZhH9hW3q0wiQgAaYz0x8vwYhn7gBNBewqhjw6ROOGAF6T0THkjgOn2a69gjD8xAt%2BJxriGXAIroKHMwXSBWOyeFh5dWxaY%2Bs3NydOyd2mBuAk1JwvW0n67v6CdMlZtEG2mISQ8bqRqakrLkuwnksIK8UyTJPIZFA3HzgvfAPxhAU%2FCAmay1MrtEMB86Ep8yCPg6KvXT%2FtSr9OH6FGFAqSBFdNXJSyjQJOzsFRkSbO86fE1M278UYaWOWCHJlrY1sJYRlt52aonlf6iru4g15UzUmYEUt9cwaW3tjbkxX0QI%2Ft8ZiSRmKXMz%2BIq1gpyI%2B7x0Jmr4zEmSslCNBYm2RsD%2BT6%2BZfUZImWBnFWtX2hlXZ7oi79hCiL7HNqtmm1mzLCPE%2BtolUku%2F2wSUmfXdiKnRI26JUpdxUVkGw%2FtwaD%2B2mZELP5Hxons0OV9jq4axJGpbiOY%2FxckAPnwnoQ5Q2o8GgC3CID3EKxqgzRPxN3rrF%2BJe%2F6R%2Bx9slEvZYAtdMmEzXJujITJYM7wsQmEd%2BWyrYy6WhzXC6tu3KcUdfgA6fWcOtBNFTaTqE%2BCfBALkh6DuULYjZPoqUzaFjHPK117PoJ12o74b74nNw6ik0YZwMKHIUncoa3HplzmBv9Kje0vbiRjqJmVEj71qVNCGi0RH5zliscLUhIGGKEBumlFlryZBD8jMOqex3y%2BhpzH4%2FE2VsCHN6Ps404rcbu3p5sYhAmErgAmEXrmoLZs0Hqf5t8UdCIBz99ieCBXOGgKw85mjE%2BgVOoMRyO9FNzZElxl8okD6jlZ56RcZJfrlqj8agpVPLdU0d0yux1qtepjnnd61SvU53RKaPlBHWEOmX1OtXrVMe87nWq16nu6JQUnOPWKXWrTrXRGzgV%2FFXItRalzCaXX%2B65LlzOr75M7kvRkI3bCJK%2BaOW9gkO%2B0t7%2BS33%2BZrzLRSttb73fv2glLz4p155oynO1J6VCF71S6VLUtrRXuvzzohXBmJ01K%2BK3rQ8uWdkdB4dTsVL%2F2f0%2FqljR6qp5LBUr6d0vKKqVthe1zsbZHw%3D%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22tsEHkLLlDlDSP8g1bJq1%22%20name%3D%22Weekly%22%3E7Vpbc5s4FP41PDoDyGD7Ed%2BanWS72XW3ifdlRzWK0UQgiuXa7q9fCSQQl8RpajcbwkwmiT5dOJK%2Bcz6Ojw0wCfcfEhgHv1MfEcM2%2Fb0BpoZtD80%2B%2Fy2AQwb0gZkB6wT7GaQBC%2FwdZaCl0C320UZiGcQoJQzHZXBFowitWAmDSUJ35WH3lPglIIZrVAMWK0jq6C32WSC35ZgFfonwOlBPtkzZE0I1WAKbAPp0p0FgZtiuYYM9NMDYENixHzBJKGUvmFheJNxPEBG3pG7gylyiP1j%2FDt2xv%2FEVHH7dDq57mdnzX%2FS0%2FJwTFLHXsCoMP3968D1zyxbj23%2Bu%2FpxfJv%2F27Myqb5BsJR%2FkXbKDIkhCt5GPxCIWt2QXYIYWMVyJ3h33CI4FLCSy%2Bx4TMqGEJulcMJ%2FP%2Bs6M4xuW0AdU6nHByBYzaMQ03PG80cxNt%2Fys45LH%2Bg0lDO01Rv%2Fc8VWP8gOiIWLJgbfVQxTrpdvbyi12hRPx4JBhgeZAQA2E0nHX%2BdonuXe%2Bhrz6X8Mg0MAgl%2FDNjuMSj9yvW%2BHZY4Ij1FMH4vEhaUBxigH8v7X8S7K%2F87iKBVbj2oJLvU0aYtOV3Xj%2F%2BLpi8MtXmWAm2PARhkgzNFuzZr8w90UbsE6ygXQVMyNB2rfTjj%2BiSQhJwwYDGHEnt016L%2FwQJSscYwYZplE60YWh8P3oyyYub7ZFZ3DJh%2FBuhsRW38mer7mEn3TLNectO3RFbXgUZ2VJKUtHRCNU0RkJbbgo4WjNAadofaLc7GkvPYUm6aJcOO5J%2BtYSYN9HnNvjQvDMN6xPYHQBLBP0%2B0N74AxdJexKrtTrpyZX1hBc5MNNdzga1tVr1C7x6nfi1cog1olXJ16deLVVvEBDrvUOxcvpxKuVQawTr068OvFqrXgpFXrf4jV4VLye7WROk6t%2B9D6Pvb8e9ZaTcR4SvOaUna44CRHHx4JneAWJJztCTmrxmEbyt4LoQNWIJLPVp90asRVpyx%2BAt4rIw%2BMVFBT5nqjUFezx4SbISyoa%2BwR%2BAxlnVJQitglyTqrqnCiacEIkhztBnwtHNZdyjbQx3UtuZa2Dau0xy6YNHNlcal3FLNFQk85du9nQbbJCTxzxKBvHYLJG7HhMQX6p4nluN8grP9INLLfuB8pTdD9QWJMfnM7mqv03FKfhVfmwVTa%2BZlV2OXLWCRz0R2xzK7ZVK2cZIc5jmwwk%2BXW%2FtbA0Oh6WusLucwq7Te7cWNjtP%2BHPb1DXVGDQGHRJRcptGgNujDmFmBzy1i1CD%2BTQvV%2Bdkol2Jf5ZgzoTLcU6nYmKwW1holVjYjlXKCe5PP%2BMjBfnD7ez2dX1UvD7t8XNtbfUMols4VpG3SUY53IAFWUfzy8slUy0OMGwnvEdrTNkGHmmoCcK1pOJgpaV2KW0pEhEmtOSV88wVIg5mmLYr5JiHHeEt5NgVF%2BT%2FkcJhlX9jO29JBjp7B%2F45q2yvfhCNJj9Bw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E"></iframe>';
    return <div>
      <div style={{ float: 'left', paddingRight: '15px' }}>
        {ReactHtmlParser(html)}
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}>User Stories</h2>
        <h4>User One</h4>
        <p>Max needs accurate information on the weather since he travels frequently for work.  He wants a weather app that he can use to pull up weather information quickly and easily.  This app will ensure that Max is also prepared regardless of the city he is working in.</p>
        <h4>User Two</h4>
        <p>As a pet-owner, I need to know the weather for my dog's daily walks.  I need an app that is always accurate.  Having an accurate weather app will allow me to prep my dog's weather appropriate clothing (doggy shoes for hot days, raincoat etc.)</p>
      </div>
    </div>;
  }
}

export default Wireframe