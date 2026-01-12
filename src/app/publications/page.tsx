import { CustomLink } from "@/components";

const Publications = () => {
  return (
    <div>
      <h1>Publications</h1>
      <div>
        <h2>Peer-reviewed articles</h2>
        <p>
          Arpini, E., Stegemann, L. and <strong>Brown, G</strong>. (2021){" "}
          <CustomLink href="https://www.ingentaconnect.com/content/stair/stair/2021/00000016/00000002/art00012">
            Countering Neoliberalism by Harnessing the Local State? The Role of
            Social Movements in Municipalist Campaigns. A Comparative Study of
            Argentina, Germany and the USA
          </CustomLink>
          <em>St Antony’s International Review</em> 16(2): 225-252
        </p>

        <h2>Policy reports</h2>

        <p>
          <strong>Brown, G</strong>., Traill, H., Anderson, S., Shaw, D.,
          Cumbers, A., McMaster, R. (2023){" "}
          <CustomLink href="https://eprints.gla.ac.uk/306031/1/306031.pdf">
            Good Food for All in Glasgow: An Interim Assessment of the Glasgow
            City Food Plan
          </CustomLink>
        </p>

        <h2>Reviews and public writing</h2>

        <p>
          <strong>Brown, G</strong>. (2024){" "}
          <CustomLink href="https://onlinelibrary.wiley.com/doi/abs/10.1111/bjir.12814">
            Re-union: How bold labor reforms can repair, revitalize, and reunite
            the United States&nbsp;By&nbsp;David Madland,&nbsp;Ithaca, NY: ILR
            Press.&nbsp;2021.&nbsp;240&nbsp;pp. Price $29.95 (hbk). ISBN:
            978-1501755378.
          </CustomLink>
          <em>British Journal of Industrial Relations</em> 62(4): 814-815
        </p>

        <p>
          <strong>Brown, G</strong>. (2022){" "}
          <CustomLink href="https://tribunemag.co.uk/2022/11/new-yorks-fight-to-put-renewable-energy-in-public-hands">
            New York’s Fight to Put Renewable Energy in Public Hands
          </CustomLink>{" "}
          <em>Tribune </em>
        </p>
      </div>
    </div>
  );
};

export default Publications;
