import React, { useState } from 'react';
import { Copy, Check, Link, Image, FileText } from 'lucide-react';

const AffiliateTools: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  
  const affiliateLink = 'https://bswisdom.org/?ref=YOUR_AFFILIATE_ID';
  
  const bannerOptions = [
    { id: 'banner1', name: 'Professional Services Banner', size: '728x90', url: '/banners/professional-banner.jpg' },
    { id: 'banner2', name: 'Academic Services Banner', size: '300x250', url: '/banners/academic-banner.jpg' },
    { id: 'banner3', name: 'Legal Services Banner', size: '300x250', url: '/banners/legal-banner.jpg' },
    { id: 'banner4', name: 'Business Services Banner', size: '728x90', url: '/banners/business-banner.jpg' },
  ];
  
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Link className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">Your Affiliate Link</h3>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={affiliateLink}
            readOnly
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={() => copyToClipboard(affiliateLink, 'link')}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-200 flex items-center"
          >
            {copied === 'link' ? (
              <>
                <Check className="h-5 w-5 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-5 w-5 mr-1" />
                Copy
              </>
            )}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Share this link with potential clients to earn commissions on their purchases.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Image className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">Banner Ads</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {bannerOptions.map((banner) => (
            <div key={banner.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{banner.name}</h4>
                <span className="text-sm text-gray-500">{banner.size}</span>
              </div>
              <div className="bg-gray-100 h-24 flex items-center justify-center mb-2 rounded">
                <span className="text-gray-400">Banner Preview</span>
              </div>
              <button
                onClick={() => copyToClipboard(`<a href="${affiliateLink}"><img src="https://bswisdom.org${banner.url}" alt="${banner.name}" /></a>`, banner.id)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center"
              >
                {copied === banner.id ? (
                  <>
                    <Check className="h-5 w-5 mr-1" />
                    Copied HTML Code
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5 mr-1" />
                    Copy HTML Code
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-4">
          <FileText className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">Marketing Materials</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {['Email Templates', 'Social Media Posts', 'Product Descriptions'].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 text-center">
              <h4 className="font-medium mb-2">{item}</h4>
              <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition duration-200 w-full">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliateTools;