using DG.Tweening;
using UnityEngine;

public class LastTray : Item
{
    public Transform tf;
    public bool isShushiOn = false;
    public bool isSauceOn = false;
    public Transform shushiDone;
    public Capybara capybara;
    public Transform items;
    void Awake()
    {
        tf = transform;
    }
    public void ShushiOn()
    {
        isShushiOn = true;
        shushiDone.gameObject.SetActive(true);
        CheckState();
    }
    public void SauceOn()
    {
        isSauceOn = true;
        CheckState();
    }
    private void CheckState()
    {
        if(isSauceOn && isShushiOn)
        {
            capybara.TickAppear();
            tf.DOLocalMoveY(tf.position.y+0.5f, 0.5f).OnComplete(()=>{
                capybara.CapyDone();
                DOVirtual.DelayedCall(capybara.skinChangeDelay, () =>
                {
                    FadeOutItemsSprites();
                    tf.DOLocalMoveY(tf.position.y-0.5f, 0.5f);
                });
            });
        }
    }
    
    private void FadeOutItemsSprites()
    {
        SpriteRenderer[] spriteRenderers = items.GetComponentsInChildren<SpriteRenderer>();
        for (int i = 0; i < spriteRenderers.Length; i++)
        {
            spriteRenderers[i].DOFade(0f, 0.5f);
        }
    }

}
