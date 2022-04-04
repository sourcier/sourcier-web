import clsx from 'clsx';
import { BsMoon, BsSun } from 'react-icons/bs';
import { CgMenuLeft } from 'react-icons/cg';

export interface NavbarProps {
  brand: string;
  nav: {
    text: string;
    href: string;
  }[];
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const Navbar = ({
  nav,
  toggleDarkMode,
  isDarkMode = false,
}: NavbarProps) => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
          <CgMenuLeft className="inline-block w-4 h-4" />
        </label>
        <a
          className="text-xl normal-case btn btn-ghost"
          href="/"
          data-testid="site-brand"
        >
          <svg
            viewBox="0 0 939 193"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 fill-neutral dark:fill-white"
            aria-labelledby="site-logo"
            role="img"
          >
            <title data-testid="site-logo" id="site-logo">
              Sourcier
            </title>
            <path d="M114.168 38.576C113.144 40.368 112.035 41.6907 110.84 42.544C109.731 43.312 108.323 43.696 106.616 43.696C104.824 43.696 102.861 43.056 100.728 41.776C98.68 40.4107 96.2053 38.9173 93.304 37.296C90.4027 35.6747 86.9893 34.224 83.064 32.944C79.224 31.5787 74.6587 30.896 69.368 30.896C64.5893 30.896 60.408 31.4933 56.824 32.688C53.24 33.7973 50.2107 35.376 47.736 37.424C45.3467 39.472 43.5547 41.9467 42.36 44.848C41.1653 47.664 40.568 50.7787 40.568 54.192C40.568 58.544 41.7627 62.1707 44.152 65.072C46.6267 67.9733 49.8693 70.448 53.88 72.496C57.8907 74.544 62.456 76.3787 67.576 78C72.696 79.6213 77.944 81.3707 83.32 83.248C88.696 85.04 93.944 87.1733 99.064 89.648C104.184 92.0373 108.749 95.1093 112.76 98.864C116.771 102.533 119.971 107.056 122.36 112.432C124.835 117.808 126.072 124.336 126.072 132.016C126.072 140.379 124.621 148.229 121.72 155.568C118.904 162.821 114.723 169.179 109.176 174.64C103.715 180.016 97.016 184.283 89.08 187.44C81.144 190.512 72.056 192.048 61.816 192.048C55.928 192.048 50.1253 191.451 44.408 190.256C38.6907 189.147 33.1867 187.525 27.896 185.392C22.6907 183.259 17.784 180.699 13.176 177.712C8.568 174.725 4.472 171.397 0.888 167.728L11 151.216C11.8533 150.021 12.9627 149.04 14.328 148.272C15.6933 147.419 17.144 146.992 18.68 146.992C20.8133 146.992 23.1173 147.888 25.592 149.68C28.0667 151.387 31.0107 153.307 34.424 155.44C37.8373 157.573 41.8053 159.536 46.328 161.328C50.936 163.035 56.44 163.888 62.84 163.888C72.6533 163.888 80.248 161.584 85.624 156.976C91 152.283 93.688 145.584 93.688 136.88C93.688 132.016 92.4507 128.048 89.976 124.976C87.5867 121.904 84.3867 119.344 80.376 117.296C76.3653 115.163 71.8 113.371 66.68 111.92C61.56 110.469 56.3547 108.891 51.064 107.184C45.7733 105.477 40.568 103.429 35.448 101.04C30.328 98.6507 25.7627 95.536 21.752 91.696C17.7413 87.856 14.4987 83.0773 12.024 77.36C9.63467 71.5573 8.44 64.432 8.44 55.984C8.44 49.2427 9.76267 42.672 12.408 36.272C15.1387 29.872 19.064 24.1973 24.184 19.248C29.304 14.2987 35.6187 10.3307 43.128 7.34399C50.6373 4.35733 59.256 2.864 68.984 2.864C79.9067 2.864 89.976 4.57066 99.192 7.98399C108.408 11.3973 116.259 16.176 122.744 22.32L114.168 38.576ZM208.728 56.624C218.456 56.624 227.288 58.2027 235.224 61.36C243.245 64.5173 250.072 68.9973 255.704 74.8C261.421 80.6027 265.816 87.6853 268.888 96.048C271.96 104.411 273.496 113.755 273.496 124.08C273.496 134.491 271.96 143.877 268.888 152.24C265.816 160.603 261.421 167.728 255.704 173.616C250.072 179.504 243.245 184.027 235.224 187.184C227.288 190.341 218.456 191.92 208.728 191.92C198.915 191.92 189.997 190.341 181.976 187.184C173.955 184.027 167.085 179.504 161.368 173.616C155.736 167.728 151.341 160.603 148.184 152.24C145.112 143.877 143.576 134.491 143.576 124.08C143.576 113.755 145.112 104.411 148.184 96.048C151.341 87.6853 155.736 80.6027 161.368 74.8C167.085 68.9973 173.955 64.5173 181.976 61.36C189.997 58.2027 198.915 56.624 208.728 56.624ZM208.728 167.6C219.651 167.6 227.715 163.931 232.92 156.592C238.211 149.253 240.856 138.501 240.856 124.336C240.856 110.171 238.211 99.376 232.92 91.952C227.715 84.528 219.651 80.816 208.728 80.816C197.635 80.816 189.4 84.5707 184.024 92.08C178.733 99.504 176.088 110.256 176.088 124.336C176.088 138.416 178.733 149.168 184.024 156.592C189.4 163.931 197.635 167.6 208.728 167.6ZM410.768 58.672V190H391.44C387.259 190 384.613 188.08 383.504 184.24L381.328 173.744C375.952 179.205 370.021 183.643 363.536 187.056C357.051 190.384 349.413 192.048 340.624 192.048C333.456 192.048 327.099 190.853 321.552 188.464C316.091 185.989 311.483 182.533 307.728 178.096C303.973 173.659 301.115 168.411 299.152 162.352C297.275 156.208 296.336 149.467 296.336 142.128V58.672H327.952V142.128C327.952 150.149 329.787 156.379 333.456 160.816C337.211 165.168 342.8 167.344 350.224 167.344C355.685 167.344 360.805 166.149 365.584 163.76C370.363 161.285 374.885 157.915 379.152 153.648V58.672H410.768ZM471.94 81.456C476.036 73.6053 480.9 67.4613 486.532 63.024C492.164 58.5013 498.82 56.24 506.5 56.24C512.559 56.24 517.423 57.5627 521.092 60.208L519.044 83.888C518.617 85.424 517.977 86.5333 517.124 87.216C516.356 87.8133 515.289 88.112 513.924 88.112C512.644 88.112 510.724 87.8987 508.164 87.472C505.689 87.0453 503.257 86.832 500.868 86.832C497.369 86.832 494.255 87.344 491.524 88.368C488.793 89.392 486.319 90.8853 484.1 92.848C481.967 94.7253 480.047 97.0293 478.34 99.76C476.719 102.491 475.183 105.605 473.732 109.104V190H442.116V58.672H460.676C463.919 58.672 466.18 59.2693 467.46 60.464C468.74 61.5733 469.593 63.6213 470.02 66.608L471.94 81.456ZM627.946 86.448C627.007 87.6427 626.069 88.5813 625.13 89.264C624.277 89.9467 622.997 90.288 621.29 90.288C619.669 90.288 618.09 89.8187 616.554 88.88C615.018 87.856 613.183 86.7467 611.05 85.552C608.917 84.272 606.357 83.1627 603.37 82.224C600.469 81.2 596.842 80.688 592.49 80.688C586.943 80.688 582.079 81.712 577.898 83.76C573.717 85.7227 570.218 88.5813 567.402 92.336C564.671 96.0907 562.623 100.656 561.258 106.032C559.893 111.323 559.21 117.339 559.21 124.08C559.21 131.077 559.935 137.307 561.386 142.768C562.922 148.229 565.098 152.837 567.914 156.592C570.73 160.261 574.143 163.077 578.154 165.04C582.165 166.917 586.687 167.856 591.722 167.856C596.757 167.856 600.81 167.259 603.882 166.064C607.039 164.784 609.685 163.419 611.818 161.968C613.951 160.432 615.786 159.067 617.322 157.872C618.943 156.592 620.735 155.952 622.698 155.952C625.258 155.952 627.178 156.933 628.458 158.896L637.546 170.416C634.047 174.512 630.25 177.968 626.154 180.784C622.058 183.515 617.791 185.733 613.354 187.44C609.002 189.061 604.479 190.213 599.786 190.896C595.178 191.579 590.57 191.92 585.962 191.92C577.855 191.92 570.218 190.427 563.05 187.44C555.882 184.368 549.61 179.931 544.234 174.128C538.858 168.325 534.591 161.243 531.434 152.88C528.362 144.432 526.826 134.832 526.826 124.08C526.826 114.437 528.191 105.52 530.922 97.328C533.738 89.0507 537.834 81.9253 543.21 75.952C548.586 69.8933 555.242 65.1573 563.178 61.744C571.114 58.3307 580.245 56.624 590.57 56.624C600.383 56.624 608.959 58.2027 616.298 61.36C623.722 64.5173 630.378 69.04 636.266 74.928L627.946 86.448ZM690.134 58.672V190H658.39V58.672H690.134ZM694.486 20.4C694.486 23.1307 693.931 25.6907 692.822 28.08C691.713 30.4693 690.219 32.56 688.342 34.352C686.55 36.144 684.417 37.5947 681.942 38.704C679.467 39.728 676.822 40.24 674.006 40.24C671.275 40.24 668.673 39.728 666.198 38.704C663.809 37.5947 661.718 36.144 659.926 34.352C658.134 32.56 656.683 30.4693 655.574 28.08C654.55 25.6907 654.038 23.1307 654.038 20.4C654.038 17.584 654.55 14.9387 655.574 12.464C656.683 9.98933 658.134 7.856 659.926 6.064C661.718 4.27199 663.809 2.86399 666.198 1.84C668.673 0.730662 671.275 0.175995 674.006 0.175995C676.822 0.175995 679.467 0.730662 681.942 1.84C684.417 2.86399 686.55 4.27199 688.342 6.064C690.219 7.856 691.713 9.98933 692.822 12.464C693.931 14.9387 694.486 17.584 694.486 20.4ZM806.974 109.232C806.974 105.136 806.377 101.296 805.182 97.712C804.073 94.0427 802.366 90.8427 800.062 88.112C797.758 85.3813 794.814 83.248 791.23 81.712C787.731 80.0907 783.635 79.28 778.942 79.28C769.811 79.28 762.601 81.8827 757.31 87.088C752.105 92.2933 748.777 99.6747 747.326 109.232H806.974ZM746.686 128.304C747.198 135.045 748.393 140.891 750.27 145.84C752.147 150.704 754.622 154.757 757.694 158C760.766 161.157 764.393 163.547 768.574 165.168C772.841 166.704 777.534 167.472 782.654 167.472C787.774 167.472 792.169 166.875 795.838 165.68C799.593 164.485 802.835 163.163 805.566 161.712C808.382 160.261 810.814 158.939 812.862 157.744C814.995 156.549 817.043 155.952 819.006 155.952C821.651 155.952 823.614 156.933 824.894 158.896L833.982 170.416C830.483 174.512 826.558 177.968 822.206 180.784C817.854 183.515 813.289 185.733 808.51 187.44C803.817 189.061 798.995 190.213 794.046 190.896C789.182 191.579 784.446 191.92 779.838 191.92C770.707 191.92 762.217 190.427 754.366 187.44C746.515 184.368 739.689 179.888 733.886 174C728.083 168.027 723.518 160.688 720.19 151.984C716.862 143.195 715.198 133.04 715.198 121.52C715.198 112.56 716.649 104.155 719.55 96.304C722.451 88.368 726.59 81.4987 731.966 75.696C737.427 69.808 744.041 65.1573 751.806 61.744C759.657 58.3307 768.489 56.624 778.302 56.624C786.579 56.624 794.217 57.9467 801.214 60.592C808.211 63.2373 814.227 67.12 819.262 72.24C824.297 77.2747 828.222 83.504 831.038 90.928C833.939 98.2667 835.39 106.672 835.39 116.144C835.39 120.923 834.878 124.165 833.854 125.872C832.83 127.493 830.867 128.304 827.966 128.304H746.686ZM888.94 81.456C893.036 73.6053 897.9 67.4613 903.532 63.024C909.164 58.5013 915.82 56.24 923.5 56.24C929.559 56.24 934.423 57.5627 938.092 60.208L936.044 83.888C935.617 85.424 934.977 86.5333 934.124 87.216C933.356 87.8133 932.289 88.112 930.924 88.112C929.644 88.112 927.724 87.8987 925.164 87.472C922.689 87.0453 920.257 86.832 917.868 86.832C914.369 86.832 911.255 87.344 908.524 88.368C905.793 89.392 903.319 90.8853 901.1 92.848C898.967 94.7253 897.047 97.0293 895.34 99.76C893.719 102.491 892.183 105.605 890.732 109.104V190H859.116V58.672H877.676C880.919 58.672 883.18 59.2693 884.46 60.464C885.74 61.5733 886.593 63.6213 887.02 66.608L888.94 81.456Z" />
          </svg>
        </a>
      </div>
      <div className="navbar-end">
        <ul className="hidden p-0 menu menu-horizontal sm:inline-flex">
          {nav.map(({ text, href }, idx) => (
            <li key={idx}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
        <button
          className={clsx('btn btn-ghost swap swap-rotate', {
            'swap-active': isDarkMode,
          })}
          onClick={toggleDarkMode}
        >
          <BsSun className="inline-block w-4 h-4 swap-on" />
          <BsMoon className="inline-block w-4 h-4 swap-off" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
