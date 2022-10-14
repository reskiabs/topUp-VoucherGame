import Image from 'next/image';
import FooterItem from '../../molecules/FooterItem';

export default function Story() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/#" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo storeGG" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                {' '}
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2022. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                  <ul className="list-unstyled">
                    <FooterItem href="/#" title="About Us" />
                    <FooterItem href="/#" title="Press Release" />
                    <FooterItem href="/#" title="Terms of Use" />
                    <FooterItem href="/#" title="Privacy & Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                  <ul className="list-unstyled">
                    <FooterItem href="/#" title="Refund Policy" />
                    <FooterItem href="/#" title="Unlock Rewards" />
                    <FooterItem href="/#" title="Live Chatting" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                  <ul className="list-unstyled">
                    <FooterItem href="mailto: hi@store.gg" title="reskiabbas@student.unismuh.ac.id" />
                    <FooterItem href="mailto: team@store.gg" title="@reskiabs" />
                    <FooterItem
                      href="http://maps.google.com/?q=Pasific 12,
                            Jakarta Selatan"
                      title="Toddopuli X, Kota Makassar"
                    />
                    <FooterItem
                      href="wa.me/6282195157186"
                      title="0821 - 9515 -
                        7186"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
